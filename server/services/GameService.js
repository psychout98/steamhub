const GameRepository = require("../repositories/GameRepository")

const gameRepository = new GameRepository()

class GameService {

    async getAllGames(query) {
        let count = Number(query.count) || 10
        let games = await gameRepository.getAllGames()
        return { games: games.slice(0, count), max: games.length }
    }

    async updateGames() {
        return fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
        .then(response => response.json())
        .then((json) => {
            return gameRepository.addAllGames(json.applist.apps.filter((game) => game.name !== ''))
            .then((result) => {
                console.log(result)
                return { status: 'nailed it' }
            }).catch((error) => {
                console.log('Error posting to db', error)
                return { status: 'screwed it' }
            })
        })
        .catch((error) => {
            console.log('Error getting games', error)
            return { status: 'screwed it' }
        })
    }
}

module.exports = GameService