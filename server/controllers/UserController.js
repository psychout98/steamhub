const UserService = require("../services/UserService")

const userService = new UserService()

class UserController {

    async createUser(req, res) {
        return userService.createUser(req.query)
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async getUser(req, res) {
        return userService.getUser(req.query)
            .then(data => {
                return res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async followUser(req, res) {
        return userService.followUser(req.query)
        .then(data => {
            return res.send(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    async followGame(req, res) {
        return userService.followGame(req.query)
        .then(data => {
            return res.send(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

module.exports = UserController