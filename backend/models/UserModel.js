import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Freelancer',
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    portfolioLinks: {
        type: [String],
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    rating: {
        type: Number, //0-5
        default: 0,
        required: false
    }
});

export const User = mongoose.model('user', userSchema);