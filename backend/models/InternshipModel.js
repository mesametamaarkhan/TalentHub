import mongoose from "mongoose";

const internshipSchema = mongoose.Schema({
    internshipId: {
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
    employerId: {
        type: String,  //reference
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    assignedCandidates: {
        type: [String],
        required: true
    },
    stipend: {
        type: Number,
        default: 0,
        required: false
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