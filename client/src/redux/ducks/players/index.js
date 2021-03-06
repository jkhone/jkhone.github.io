import { useEffect } from 'react' 
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


// action names
const GET_PLAYERS = 'GET_PLAYERS'
const GET_TEAM = 'GET_TEAM'
const GET_PLAYER_SEARCH = 'GET_PLAYER_SEARCH'
const GET_GAMES = 'GET_GAMES'

// initial state
const initialState = {
    players: [],
    teamPlayers: []
}

// reducer
export default (state= initialState, action) =>{
    switch(action.type) {
        case GET_PLAYERS: 
            return {...state, players: action.payload}
        case GET_TEAM: 
            return {...state, players: action.payload}    
        case GET_PLAYER_SEARCH: 
            return {...state, players: action.payload}   

        case GET_GAMES: 
            return {...state, teamPlayers: action.payload}  

        default:
            return state
    }
}





const getGames = (team1, team2) => {
    return dispatch => {
        axios.get(`/api/players/teams/${team1}/${team2}`).then(resp => {
            dispatch({
                type: GET_GAMES,
                payload: resp.data
            })
        })
    }
}






//actions
const getPlayers = () => {
    return dispatch => {
        axios.get("/api/players").then(resp => {
            dispatch({
                type: GET_PLAYERS,
                payload: resp.data
            })
        })
    }
}

const getTeam = (team) => {
    return dispatch => {
        axios.get("/api/players/teams/"+team).then(resp => {
            dispatch({
                type: GET_TEAM,
                payload: resp.data
            })
        })
    }
}

const PlayerSearch = (search) => {
    return dispatch => {
        axios.get("api/players/search/"+search).then(resp => {
            dispatch({
                type: GET_PLAYER_SEARCH,
                payload: resp.data
            })
        })
    }
}

// custom hooks

export const usePlayers = () => {
    const dispatch = useDispatch()
    const players = useSelector(appState => appState.playerState.players)
    const teamedplayers = useSelector(appState => appState.playerState.teamPlayers)
    const games = useSelector(appState => appState.playerState.games)

    const playersearch = search =>dispatch(PlayerSearch(search))
    const allPlayers = ()=> dispatch(getPlayers())
    const team = team => dispatch(getTeam(team))
    const getteamedPlayers = (team1, team2) => dispatch(getGames(team1,team2))
    
    useEffect(()=>{
        dispatch(getPlayers())
    },[dispatch])

    return { players, team, playersearch, allPlayers, games, getteamedPlayers, teamedplayers    }
}
