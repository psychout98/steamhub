const UserRepository = require("../repositories/UserRepository")

const userRepository = new UserRepository()

class UserService {

    async createUser(query) {
        let user = await userRepository.createUser(query.username)
        return { user: user }
    } 

    async getUser(query) {
        let user = await userRepository.getUser(query.username)
        return { user: user }
    }

    async followUser(query) {
        let user = await userRepository.followUser(query.username, query.followUsername)
        return { user: user }
    }

    async followGame(query) {
        let user = await userRepository.followGame(query.username, query.appid)
        return { user: user }
    }

}

module.exports = UserService