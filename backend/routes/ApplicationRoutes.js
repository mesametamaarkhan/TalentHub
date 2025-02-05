import express from 'express';
import { Application } from '../models/ApplicationModel.js';
import authenticateToken from '../middleware/AuthenticateToken.js';

const router = express.Router();

//apply for gig route 
router.post('/gig/:id', authenticateToken, async (req, res) => {
    if(!req.body.userId || !req.body.applicationDate || !req.body.status || !req.body.resumeLink) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { userId, applicationDate, status, resumeLink } = req.body;
    const { id } = req.params; //gig id

    try {
        const existingApplication = await Application.findOne({ gigId: id, userId: userId});
        if(existingApplication) {
            return res.status(409).json({ message: 'Application already exists', existingApplication });
        }

        const newApplication = new Application({
            userId,
            gigId: id,
            applicationDate,
            status,
            resumeLink
        });

        await newApplication.save();
        res.status(200).json({ message: 'Applied Successfully!' });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//get applications for particular gig 
router.get('/gig/:id', async (req, res) => {
    try {
        const gigApplications = await Application.find({ gigId: id });
        if(!gigApplications) {
            return res.status(404).json({ message: 'Applications not found for this gig' });
        }

        res.status(200).json({ gigApplications });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//apply for internship route
router.post('/internship/:id', async (req, res) => {
    if(!req.body.userId || !req.body.applicationDate || !req.body.status || !req.body.resumeLink) {
        return res.status(400).json({ message: 'Some required fields are missing!!' });
    }

    const { userId, applicationDate, status, resumeLink } = req.body;
    const { id } = req.params; //internship id

    try {
        const existingApplication = await Application.findOne({ internshipId: id, userId: userId});
        if(existingApplication) {
            return res.status(409).json({ message: 'Application already exists', existingApplication });
        }

        const newApplication = new Application({
            userId,
            internshipId: id,
            applicationDate,
            status,
            resumeLink
        });

        await newApplication.save();
        res.status(200).json({ message: 'Applied Successfully!' });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//get applications for particular internship
router.get('/internship/:id', async (req, res) => {
    try {
        const internshipApplications = await Application.find({ internshipId: id });
        if(!internshipApplications) {
            return res.status(404).json({ message: 'Applications not found for this gig' });
        }

        res.status(200).json({ internshipApplications });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


export default router;