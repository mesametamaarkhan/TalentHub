import mongoose from 'mongoose';
import { Internship } from './InternshipModel';

const applicationSchema = mongoose.Schema({
    applicationId: {
        type: String,
        required: true
    },
    userId: {
        type: String, //reference
        required: true
    },
    gigId: {
        type: String, //reference
        default: null,
        required: false
    },
    internshipId: {
        type: String, //reference
        default: null,
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
    coverLetter: {
        type: String,
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
    motivationalStatement: {
        type: String,
        required: true
    }
});

export const Application = mongoose.model('application', applicationSchema);