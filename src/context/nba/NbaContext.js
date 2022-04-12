import { createContext, useReducer } from "react";
import nbaReducer from "./NbaReducer";

const NbaContext = createContext()

const NbaApiUrl = 'https://www.balldontlie.io/api/v1/players'

//Provider function is exported
//Wraps around ALL of the functions, the fetch, the return
export const NbaProvider = ({children}) => {
  const initialState = {
    players: [],

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
        payload: data 
      })
    }
  }

  return <NbaContext.Provider value={{
    players: state.players,
    getPlayers,
  }}>
  {children}
  </NbaContext.Provider>

}

export default NbaContext
