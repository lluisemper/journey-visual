const INITIAL_STATE = {
  steps:[],
  
}
const uiState = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_STEP":
      return {...state, steps:action.steps}; //update our store
    default :
      return state
  }
}

export default uiState