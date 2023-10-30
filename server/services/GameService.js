const GameRepository = require("../repositories/GameRepository")

const gameRepository = new GameRepository()

class GameService {

    async getAllGames() {
        return { games: await gameRepository.getAllGames() }
    }
}

module.exports = GameService