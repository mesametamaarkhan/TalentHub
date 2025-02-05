import express from 'express';
import { Internship } from '../models/InternshipModel.js';
import authenticateToken from '../middleware/AuthenticateToken.js';

const router = express.Router();

//internships creation route
router.post('/create-internship', authenticateToken, async (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.location || !req.body.employerId ||
        !req.body.duration || !req.body.skillsRequired || !req.body.availableSeats || 
        !req.body.stipend || !req.body.status
    ) {
        return res.status(400).json({ message: 'Some required fields are missing!!!' });
    }

    const { title, description, location, employerId, duration, skillsRequired, availableSeats, stipend, status } = req.body;

    try {
        const newInternship =  new Internship({
            title,
            description,
            location,
            employerId,
            duration,
            skillsRequired,
            availableSeats,
            stipend,
            status,
        });

        await newInternship.save();
        res.status(200).json({ message: 'Internship created successfully' });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error});
    }
});

//internships fetch route (all)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const internships = await Internship.find();
        if(!internships) {
            return res.status(404).json({ message: 'No internships found!', internships });
        }

        res.status(200).json({ internships });
    }
    catch(error) {
        res.status(500).json({ message: 'Server error', error })
    }
});

//internships fetch route (just one)
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const internship = await Internship.findById(id);

        if(!internship) {
            return res.status(404).json({ message: 'The specified internship does not exist' });
        }

        res.status(200).json({ internship });
    }
    catch(error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});



export default router; 