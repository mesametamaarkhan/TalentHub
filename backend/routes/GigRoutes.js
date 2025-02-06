import express from 'express';
import { Gig } from '../models/GigModel.js';
import authenticateToken from '../middleware/AuthenticateToken.js';
import mongoose from 'mongoose';


const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

//gig creation route
router.post('/create-gig', authenticateToken, async (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.category || !req.body.employerId ||
        !req.body.budget || !req.body.status || !req.body.skillsRequired || !req.body.duration || !req.body.postedDate
    ) {
        return res.status(400).json({ message: 'Some required fields are missing!!!' });
    }

    const { title, description, category, employerId, budget, status, skillsRequired, duration, postedDate } = req.body;

    try {
        const newGig =  new Gig({
            title,
            description,
            category,
            employerId,
            budget,
            status, 
            skillsRequired,
            duration,
            postedDate
        });

        await newGig.save();
        res.status(201).json({ message: 'Gig created successfully' });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error});
    }
});

router.get('/', authenticateToken, async (req, res) => {
    try {
        const gigs = await Gig.find();
        if(!gigs) {
            return res.status(404).json({ message: 'Gigs not found!!' });
        }

        res.status(200).json({ gigs });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error })
    }
})


//gig fetch route (just one)
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const gig = await Gig.findById(id);

        if(!gig) {
            return res.status(404).json({ message: 'The specified gig does not exist' });
        }

        res.status(200).json({ gig });
    }
    catch(error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

router.get('/postedBy/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        // Using aggregate to fetch gigs along with applicant details
        const gigs = await Gig.aggregate([
            { $match: { employerId: new ObjectId(id) } }, // Filter gigs by employerId
            {
                $lookup: {
                    from: 'users', // The 'users' collection that stores user details
                    localField: 'applicants', // The 'applicants' field is an array of userIds in the gig document
                    foreignField: '_id', // Match the userIds with the _id field in the 'users' collection
                    as: 'applicants' // Alias to store the result of the lookup in the 'applicants' field
                }
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    budget: 1,
                    skillsRequired: 1,
                    applicants: {
                        _id: 1,
                        name: 1, // Project only the fields you want from applicants
                        experience: 1 // Assuming experience is directly in the applicants array
                    }
                }
            }
        ]);

        if (!gigs || gigs.length === 0) {
            return res.status(404).json({ message: 'The specified gig does not exist' });
        }

        res.status(200).json({ gigs });
    } catch (error) {
        console.error('Error fetching gigs with applicants:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});



//gig applicant update route
router.put('/update-applicants/:id', authenticateToken, async (req, res) => {
    if(!req.body.userId) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { userId } = req.body;
    const { id } = req.params;

    try {
        const existingGig = await Gig.findById(id);
        if(!existingGig) {
            return res.status(404).json({ message: 'Gig not found!!' });
        }

        if (!existingGig.applicants) {
            existingGig.applicants = [];
        }

        if(existingGig.applicants.includes(userId)) {
            return res.status(409).json({ message: 'Application already exists!!' });
        }

        existingGig.applicants.push(userId);
        await existingGig.save();
        res.status(200).json({ message: 'Application Successful' });
    }
    catch(error) {
        res.status(500).json({ message: 'Server Error', error});
    }
});

export default router; 