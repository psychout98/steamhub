const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    appid: Number,
    name: String
})
const GameModel = mongoose.model('Game', gameSchema)

class GameRepository {

    async getAllGames() {
        return await GameModel.find()
    }

    async addAllGames(games) {
        return await GameModel.insertMany(games)
    }
}

module.exports = GameRepository