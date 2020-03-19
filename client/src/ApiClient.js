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
      body: JSON.stringify({journey})
    })
  },
  postJourney: (id, journey) => {  
    return fetchRequest(`/${id}/journey`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({journey})
    })
  },
  postStep: (id, step, index) => {  
    return fetchRequest(`/${id}/step`, {
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ step, index})
    })
  },
  getJourneys: () => {
    return fetchRequest(`/journeys`, {
      credentials: 'include',
    })
  },
  getPersonas: (id) => {
    return fetchRequest(`/${id}/personas`, {
      credentials: 'include',
    })
  },
  getSteps: (id) => {
    return fetchRequest(`/${id}/steps`, {
      credentials: 'include',
    })
  },
  updateStep: (id, step) => {
    console.log(step._id)
    return fetchRequest(`/steps/${id}/update`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(step)
    })
  },
  updateJourney: (journey) => {
    return fetchRequest(`/journeys/${journey._id}/update`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(journey)
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

