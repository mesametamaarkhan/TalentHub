import express from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import authenticateToken from '../middleware/AuthenticateToken';

dotenv.config();
const router = express.Router();


//user signup route
router.post('/register', async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.role || 
        !req.body.bio || !req.body.skills || !req.body.portfolioLinks || !req.body.experience
    ) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { name, email, password, role, bio, skills, portfolioLinks, experience, } = req.body;

    try {
        const existingEmail = await User.findOne({ email });
        if(existingEmail) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email, 
            password: passwordHash,
            role,
            bio,
            skills,
            portfolioLinks,
            experience
        });
        await newUser.save();
        res.status(201).json({ message: 'User registration successful'});
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//user login route
router.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password) {
        console.log(req.body);
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect Password' });
        }

        const payload = {
            _id: existingUser._id,
            userId: existingUser.userId,
            role: existingUser.role,
        }

        //create jwt tokens
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '2d' });
        existingUser.refreshToken = refreshToken;
        await existingUser.save();
        res.status(200).json({ message: 'Login Successful', accessToken, refreshToken, user: { name: existingUser.name, email: existingUser.email, role: existingUser.email } });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


export default router;
