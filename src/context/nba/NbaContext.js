import { createContext, useReducer } from "react";
import nbaReducer from "./NbaReducer";

const NbaContext = createContext()

const NbaApiUrl = 'https://www.balldontlie.io/api/v1/players'

//Provider function is exported
//Wraps around ALL of the functions, the fetch, the return
export const NbaProvider = ({children}) => {
  const initialState = {
    players: [],
    player: {},
    player_team: {},
    player_stats: {}
  }

  const [state, dispatch] = useReducer(nbaReducer, initialState)
  //dispatch function, dispatches action to nbaReducer

  const getPlayers = async() => {
    const response = await fetch(`${NbaApiUrl}`) // Make a request
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()
  
      dispatch({
        type: 'GET_PLAYERS',
        payload: data.data
      })
    }
  }

  const searchPlayers = async(text) => {
 
    // ${NbaApiUrl}?search=${params}
    const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${text}`) // Make a request
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()
  
      dispatch({
        type: 'SEARCH_PLAYERS',
        payload: data.data
      })
    }
  }

  const getPlayerProfile = async(id) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`) // Make a request
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()
  
      dispatch({
        type: 'GET_PLAYER_PROFILE',
        payload: data
      })
    }
  }

  const getPlayerProfileTeam = async(id) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`) // Make a request
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()
  
      dispatch({
        type: 'GET_PLAYER_PROFILE_TEAM',
        payload: data.team
      })
    }
  }

  const getPlayerProfileStats = async(id) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`) 
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()
  
      dispatch({
        type: 'GET_PLAYER_PROFILE_STATS',
        payload: data.data[0]   //The first element of the array has stats
      })
    }
  }

  const clearPlayers = async(text) => {
    
  }

  return <NbaContext.Provider value={{
    players: state.players,
    player: state.player,
    player_team: state.player_team,
    player_stats: state.player_stats,
    getPlayers,
    getPlayerProfile,
    getPlayerProfileTeam,
    getPlayerProfileStats,
    searchPlayers,
  }}>
  {children}
  </NbaContext.Provider>

}

export default NbaContext
