const ReviewService = require("../services/ReviewService")

const reviewService = new ReviewService()

class ReviewController {

    async getReviews(req, res) {
        return reviewService.getReviews(req.query)
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async postReview(req, res) {
        return reviewService.postReview(req.body)
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

module.exports = ReviewController