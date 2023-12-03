const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    following: Array,
    games: Array
})
const UserModel = mongoose.model('User', UserSchema)

class UserRepository {

    async createUser(username) {
        return await UserModel.create({ username: username, following: [], games: []})
    }

    async getUser(username) {
        return await UserModel.findOne({ username: username })
    }
    
    async followUser(username, followUsername) {
        let user = await getUser(username)
        let following = user.following
        following.push(followUsername)
        return await UserModel.findOneAndUpdate({ username: username }, { following: following })
    }

    async followGame(username, appid) {
        let user = await getUser(username)
        let games = user.games
        games.push(appid)
        return await UserModel.findOneAndUpdate({ username: username }, { games: games })
    }
}

module.exports = UserRepository