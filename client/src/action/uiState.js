
export const setSteps = (steps) => {
  return{
    type: 'SET_STEP',
    steps
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


