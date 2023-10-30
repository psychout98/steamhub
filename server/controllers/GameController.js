const GameService = require("../services/GameService")

const gameService = new GameService()

class GameController {

    async getGames(req, res) {
        const data = await gameService.getAllGames(req.query)
        res.send(JSON.stringify(data))
    }

    async updateGames(req, res) {
        const data = await gameService.updateGames()
        res.send(JSON.stringify(data))
    }

}

module.exports = GameController