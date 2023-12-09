const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    text: String,
    username: String,
    appid: Number,
    game: String
})
const ReviewModel = mongoose.model('Review', reviewSchema)

class ReviewRepository {

    async getReviews(appids, usernames, count) {
        if (appids.length > 0 && usernames.length > 0) {
            return await ReviewModel.find({ $or: [{ appid: { $in: appids }}, {username: { $in: usernames }}]}).limit(count)
        } else if (appids.length > 0) {
            return await ReviewModel.find({ appid: { $in: appids } }).limit(count)
        } else if (usernames.length > 0) {
            return await ReviewModel.find({ username: { $in: usernames }}).limit(count)

        } else {
            return await ReviewModel.find().limit(count)
        }
    }
    
    async addReview(review) {
        return await ReviewModel.create(review)
    }
}

module.exports = ReviewRepository