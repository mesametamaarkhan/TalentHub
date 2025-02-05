import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users', 
        required: true
    },
    gigId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'gigs', 
        required: false
    },
    internshipId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'internships', 
        required: false
    },
    applicationDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
});

export const Application = mongoose.model('application', applicationSchema);