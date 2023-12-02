const GameService = require("../services/GameService")

const gameService = new GameService()

class GameController {

    async getGames(req, res) {
      console.log(req.query)
        const data = await gameService.getAllGames(req.query)
        return res.send(data)
    }

    async updateGames(req, res) {
        const data = await gameService.updateGames()
        return res.send(data)
    }

}

module.exports = GameController