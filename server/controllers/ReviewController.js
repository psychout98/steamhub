const ReviewService = require("../services/ReviewService")

const reviewService = new ReviewService()

class ReviewController {

    async getReviews(req, res) {
        const data = await reviewService.getAllReviews(req.query)
        return res.send(data)
    }

    async postReview(req, res) {
        const data = await reviewService.postReview(req.body)
        return res.send('boop')
    }

}

module.exports = ReviewController