const express = require('express')

const router = express.Router()

const GameController = require('./controllers/GameController')

const gameController = new GameController()

router.get('/games', gameController.getGames)
router.post('/games', gameController.updateGames)

module.exports = router