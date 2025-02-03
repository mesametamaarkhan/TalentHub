import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    reviewId: {
        type: String,
        required: true
    },
    reviewerId: {
        type: String, //reference
        required: true
    },
    reviewedId: {
        type: String, //reference
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export const Review = mongoose.model('review', reviewSchema);