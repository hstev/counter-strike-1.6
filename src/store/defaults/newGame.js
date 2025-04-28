export const newGame = {
    server: {
        maps: [
            { id: -1, name: '< Random Map >', selected: true },
            { id: 0, name: 'as_oilrig', selected: false },
            { id: 1, name: 'cs_747', selected: false },
            { id: 2, name: 'cs_assault', selected: false },
            // ...
        ],
        enableSteamNetworking: true,
    },
    game: {
        name: "User's Game",
        maxPlayers: 32,
        password: '',
        timeForMapInMins: 20,
        limitRounds: 0,
        // ...
    }
}