import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    gigId: {
        type: String,
        required: true
    },
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
        type: String, //reference
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
        type: String,    //reference
        default: null,
        required: true
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