import express from 'express';
import { Gig } from '../models/GigModel.js';
import authenticateToken from '../middleware/AuthenticateToken.js';

const router = express.Router();

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

//gig fetch route (all)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const gigs = await Gig.find();
        if(!gigs) {
            return res.status(404).json({ message: 'No gigs found!', gigs });
        }

        res.status(200).json({ gigs });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error })
    }
});

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



export default router; 