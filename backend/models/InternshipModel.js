import mongoose from "mongoose";

const internshipSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    employerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users', 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    assignedCandidates: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'users',
        default: [],
        required: false
    },
    stipend: {
        type: Number,
        default: 0,
        required: true
    },
    skillsRequired: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

export const Internship = mongoose.model('internship', internshipSchema);