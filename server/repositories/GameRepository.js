const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: String
})
const GameModel = mongoose.model('Game', gameSchema)

class GameRepository {

    async getAllGames() {
        return await GameModel.find()
    }
}

module.exports = GameRepository