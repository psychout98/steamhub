const GameService = require("../services/GameService")

const gameService = new GameService()

class GameController {

    async getGames(req, res) {
        const data = await gameService.getAllGames(req.query)
        res.send(data)
    }

    async updateGames(req, res) {
        const data = await gameService.updateGames()
        res.send(data)
    }

}

module.exports = GameController