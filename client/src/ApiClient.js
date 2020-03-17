const BASE_URL = 'http://localhost:4000';

export default {

  checkOrg: (loginOrg) => {  
    return fetchRequest(`/login`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginOrg)
    })
  },

  registerOrg: (loginOrg) => {  
    return fetchRequest(`/login`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginOrg)
    })
  },
  postJourney: (journey) => {  
    return fetchRequest(`/journey`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(journey)
    })
  },
  postStep: (step) => {  
    return fetchRequest(`:journey/step`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(step)
    })
  },
  getJourneys: () => {
    return fetchRequest(`/journeys`, {
      credentials: 'include',
    })
  },
  getSteps: () => {
    return fetchRequest(`/:journey/steps`, {
      credentials: 'include',
    })
  }
}

const fetchRequest = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.status === 204 ? res : res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching ${BASE_URL}${url}`)
    });
};

