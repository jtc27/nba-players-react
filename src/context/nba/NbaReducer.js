const nbaReducer = (state, action) => {
  switch (action.type) {

    case 'GET_PLAYERS': //single user data
    return {
      ...state, //Returns current state above
      players: action.payload,
    }

    default:
      return state
  }
}

export default nbaReducer