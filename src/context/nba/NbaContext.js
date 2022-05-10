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
    player_stats: {},
    player_min: {}
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

  // Gets individual player's current team name
  const getPlayerProfileTeam = async(id) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
  
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

  // Gets individual player's stats for the current NBA season
  const getPlayerProfileStats = async(id) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`) 
  
    if(response.status ===404) { 
      window.location='/notfound'
    } else {
  
      const data = await response.json()

      if (data.data[0] === undefined) {
        dispatch({
          type: 'GET_PLAYER_PROFILE_STATS',
          payload: 'N/A'  //Some players in the API have empty stats, so return N/A in this case
        })
      } else {
        dispatch({
          type: 'GET_PLAYER_PROFILE_STATS',
          payload: data.data[0]   //The first element of the array has the stats
        })
      }
    }
  }


  const clearPlayers = () => 
    dispatch({
      type: 'CLEAR_PLAYERS',
    })

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
    clearPlayers,
  }}>
  {children}
  </NbaContext.Provider>

}

export default NbaContext
