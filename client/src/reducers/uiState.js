const INITIAL_STATE = {
  steps: [],
  firstSteps: [],
  secondSteps: [],
  personas: [],
  currentPersona: null,
  journeys: [],
  currentJourney: null,
}


const uiState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, steps: action.steps };
    case "SET_FIRST_STEP":
      return { ...state, firstSteps: action.firstSteps };
    case "SET_SECOND_STEP":
      return { ...state, secondSteps: action.secondSteps };
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
    case "ADD_PERSONA":
      return {
        ...state,
        currentPersona: state.currentPersona ? state.currentPersona : action.newPersona,
        personas: [...state.personas, action.newPersona]
      };
    case "SET_CURRENT_JOURNEY":
      return { ...state, currentJourney: action.currentJourney };
    case "SET_CURRENT_PERSONA":
      return { ...state, currentPersona: action.currentPersona };
    default:
      return state
  }
}

export default uiState