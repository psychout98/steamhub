const ReviewRepository = require("../repositories/ReviewRepository")

const reviewRepository = new ReviewRepository()

class ReviewService {

    async getReviews(query) {
        let count = Number(query.count) || 10
        let reviews = await reviewRepository.getReviews(query.appids || [], query.usernames || [], count)
        return { reviews: reviews }
    }

    async postReview(body) {
        return { review: await reviewRepository.addReview(body) }
    }

}

module.exports = ReviewService