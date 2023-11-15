const ReviewRepository = require("../repositories/ReviewRepository")

const reviewRepository = new ReviewRepository()

class ReviewService {

    async getAllReviews(query) {
        let count = Number(query.count) || 10
        let reviews = await reviewRepository.getAllReviews()
        return { reviews: reviews.slice(0, count), max: reviews.length }
    }

    async postReview(body) {
        console.log(body)
    }

}

module.exports = ReviewService