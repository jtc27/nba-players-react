const nbaReducer = (state, action) => {
  switch (action.type) {

    case 'GET_PLAYERS': // 
    return {
      ...state,
      players: action.payload,
    }

    case 'GET_PLAYER_PROFILE': //single user data
    return {
      ...state, //Returns current state above
      player: action.payload,
    }

    case 'GET_PLAYER_PROFILE_TEAM': 
    return {
      ...state, //Returns current state above
      player_team: action.payload,
    }

    case 'GET_PLAYER_PROFILE_STATS': 
    return {
      ...state, //Returns current state above
      player_stats: action.payload,
    }

    case 'SEARCH_PLAYERS': //single user data
    return {
      ...state, //Returns current state above
      players: action.payload,
    }

    default:
      return state
  }
}

export default nbaReducer