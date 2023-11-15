const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    text: String,
    appid: Number
})
const ReviewModel = mongoose.model('Review', reviewSchema)

class ReviewRepository {

    async getAllReviews() {
        return await ReviewModel.find()
    }

    
}

module.exports = ReviewRepository