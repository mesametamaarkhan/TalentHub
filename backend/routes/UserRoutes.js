import express from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authenticateToken from '../middleware/AuthenticateToken.js';

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
        res.status(200).json({ message: 'Login Successful', accessToken, refreshToken, user: { id: existingUser._id, name: existingUser.name, email: existingUser.email, role: existingUser.email } });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//user profile page route
router.get('/profile/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json({ user });
    }
    catch(error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});


//user profile update
router.put('/profile/:id', authenticateToken, async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.bio || !req.body.skills || !req.body.portfolioLinks) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }
    
    try {
        const { id } = req.params;
        const existingUser = await User.findByIdAndUpdate(id, req.body);
        if(!existingUser) {
            return res.status(404).json({ message: 'User not found!!' });
        }

        res.status(201).json({ message: 'User updated successfully' });
    }
    catch(error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

//user password change
router.put('/password/:id', authenticateToken, async (req, res) => {
    if(!req.body.currentPassword || !req.body.newPassword) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { currentPassword, newPassword } = req.body;

    try {
        const { id } = req.params;
        const existingUser = await User.findById(id);
        
        const isPasswordValid = await bcrypt.compare(currentPassword, existingUser.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect Password' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(newPassword, salt);

        existingUser.password = passwordHash;
        await existingUser.save();
        res.status(201).json({ message: 'Password updated successfully' });
    }   
    catch(error) {
        res.status(500).json({ message: 'Server error', error});
    }
});

//refresh token route
router.post('/refresh-token', async (req, res) => {
    const { refreshToken } = req.body;
    if(!refreshToken) {
        return res.status(401).json({ message: 'Refresh token is required.'});
    }

    try {
        const existingUser = await User.findOne({ refreshToken });
        if(!existingUser) {
            return res.status(403).json({ message: 'Invalid RefreshToken'});
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, payload) => {
            if(error) {
                return res.status(403).json({ message: 'Invalid or expired refresh token.' });
            }

            const newAccessToken = jwt.sign(
                {
                    _id: existingUser._id,
                    userId: existingUser.userId,
                    role: existingUser.role,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '15m'
                }
            );

            res.status(200).json({ accessToken: newAccessToken, refreshToken });
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

export default router;
