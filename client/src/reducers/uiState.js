const INITIAL_STATE = {
  steps:[],
  personas:[],
  currentPersona:[],
  
}
const uiState = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_STEP":
      return {...state, steps:action.steps}; 
    case "SET_PERSONAS":
      return {...state, personas:action.personas}; 
    case "SET_CURRENT_PERSONA":
      return {...state, currentPersona:action.currentPersona}; 
    default :
      return state
  }
}

export default uiState