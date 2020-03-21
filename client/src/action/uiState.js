
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


