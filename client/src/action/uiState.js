import ApiClient from '../ApiClient';

export const setSteps = (steps) => {
  return{
    type: 'SET_STEP',
    steps
  }
} 
export const setPersonas = (personas) => {
  return{
    type: 'SET_PERSONAS',
    personas
  }
} 
export const setCurrentPersona = (currentPersona) => {
  return{
    type: 'SET_CURRENT_PERSONA',
    currentPersona
  }
} 
export const setJourneys = (journeys) => {
  return{
    type: 'SET_JOURNEYS',
    journeys
  }
} 
export const setCurrentJourney = (currentJourney) => {
  return{
    type: 'SET_CURRENT_JOURNEY',
    currentJourney
  }
} 

export const postJourney = (value) => {
  return dispatch => {
    ApiClient.postJourney(value).then(newJourney => {
      dispatch({type:'ADD_JOURNEY', newJourney})
    })
  }  
}

//redux thunk example dispatching requests

// const getSteps = () => {
//   setSteps() // esto se tendria que hacer dispatch de la accion
//   }
// actions = { 
// setSteps:(dispatch)=>{ 
//   ApiClient.getSteps(currentJourney._id).then(steps => {
//      dispatch({type:"SET_STEPS", steps})
//     })
// }


