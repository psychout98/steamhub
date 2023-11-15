const express = require('express')

const router = express.Router()

const GameController = require('./controllers/GameController')
const ReviewController = require('./controllers/ReviewController')

const gameController = new GameController()
const reviewController = new ReviewController()

router.get('/games', gameController.getGames)
router.post('/games', gameController.updateGames)
router.get('/reviews', reviewController.getReviews)
router.post('/review', reviewController.postReview)

module.exports = router