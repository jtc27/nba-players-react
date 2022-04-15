const nbaReducer = (state, action) => {
  switch (action.type) {

    case 'GET_PLAYERS': //
    return {
      ...state, //Returns current state above
      players: action.payload,
    }

    case 'GET_PLAYER_PROFILE': //single user data
    return {
      ...state, //Returns current state above
      player: action.payload,
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