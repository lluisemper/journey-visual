import ApiClient from '../ApiClient';

export const setSteps = (steps) => {
  return {
    type: 'SET_STEP',
    steps
  }
}
export const setFirstSteps = (firstSteps) => {
  return {
    type: 'SET_FIRST_STEP',
    firstSteps
  }
}
export const setSecondtSteps = (secondSteps) => {
  return {
    type: 'SET_SECOND_STEP',
    secondSteps
  }
}
export const setPersonas = (personas) => {
  return {
    type: 'SET_PERSONAS',
    personas
  }
}
export const setCurrentPersona = (currentPersona) => {
  return {
    type: 'SET_CURRENT_PERSONA',
    currentPersona
  }
}
export const setJourneys = (journeys) => {
  return {
    type: 'SET_JOURNEYS',
    journeys
  }
}
export const setCurrentJourney = (currentJourney) => {
  return {
    type: 'SET_CURRENT_JOURNEY',
    currentJourney
  }
}

export const postJourney = (value) => {
  return dispatch => {
    ApiClient.postJourney(value).then(newJourney => {
      dispatch({ type: 'ADD_JOURNEY', newJourney })
    })
  }
}

export const postPersona = (id, value) => {
  return dispatch => {
    ApiClient.postPersona(id, value).then(newPersona => {
      dispatch({ type: 'ADD_PERSONA', newPersona })
    })
  }
}




// export const deletePersona = (persona) => {
//   return dispatch => {
//     ApiClient.deletePersona(persona).then(deletedPersona => {
//       dispatch({ type: 'DELETE_PERSONA', deletedPersona })
//     })
//   }
// }




