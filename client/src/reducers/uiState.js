const INITIAL_STATE = {
  steps: [],
  personas: [],
  currentPersona: null,
  journeys: [],
  currentJourney: null,
}


const uiState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, steps: action.steps };
    case "SET_PERSONAS":
      return { ...state, personas: action.personas };
    case "SET_JOURNEYS":
      return { ...state, journeys: action.journeys };
    case "ADD_JOURNEY":
      return {
        ...state,
        currentJourney: state.currentJourney ? state.currentJourney : action.newJourney,
        journeys: [...state.journeys, action.newJourney]
      };
    case "SET_CURRENT_JOURNEY":
      return { ...state, currentJourney: action.currentJourney };
    default:
      return state
  }
}

export default uiState