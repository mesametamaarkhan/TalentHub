import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    employerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    assignedFreelancer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        default: null,
        required: false
    },
    applicants: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'user', 
        default: null,
        required: false
    },
    skillsRequired: {
        type: [String],
        required: true
    },
    postedDate: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

export const Gig = mongoose.model('gig', gigSchema);