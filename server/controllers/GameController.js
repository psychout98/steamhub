const GameService = require("../services/GameService")

const gameService = new GameService()

class GameController {

    async getGames(req, res) {
        return gameService.getAllGames(req.query)
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async updateGames(req, res) {
        return gameService.updateGames()
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

module.exports = GameController