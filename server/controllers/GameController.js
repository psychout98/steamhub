const GameService = require("../services/GameService")

const gameService = new GameService()

const getGames = async (req, res) => {
    const data = await gameService.getAllGames()
    res.send(JSON.stringify(data))
}

module.exports = { getGames }