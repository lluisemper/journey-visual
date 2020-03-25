const BASE_URL = 'http://localhost:4000';

export default {

  checkOrg: (loginOrg) => {
    return fetchRequest(`/login`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginOrg)
    })
  },

  registerOrg: (loginOrg) => {
    return fetchRequest(`/login`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginOrg)
    })
  },
  postJourney: (journey) => {
    return fetchRequest(`/journey`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ journey })
    })
  },
  postPersona: (id, persona) => {
    return fetchRequest(`/${id}/persona`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ persona })
    })
  },
  postStep: (id, step, index) => {
    return fetchRequest(`/${id}/step`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ step, index })
    })
  },
  postFile: (id, file) => {
    console.log('api',file)
 
    return fetchRequest(`/${id}/upload`, {
      credentials: 'include',
      method: 'POST',
      body: file
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
  updateStep: (step) => {
    return fetchRequest(`/steps/${step._id}/update`, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(step)
    })
  },
  updateJourney: (journey) => {
    return fetchRequest(`/journeys/${journey._id}/update`, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(journey)
    })
  },
  updatePersona: (persona) => {
    return fetchRequest(`/personas/${persona._id}/update`, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persona)
    })
  },
  deleteJourney: (journey) => {
    return fetchRequest(`/journeys/${journey._id}/delete`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(journey)
    })
  },
  deletePersona: (persona) => {
    return fetchRequest(`/personas/${persona._id}/delete`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persona)
    })
  },
  deleteStep: (step) => {
    return fetchRequest(`/steps/${step._id}/delete`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(step)
    })
  }
}

const fetchRequest = (url, options) => {
  return fetch(`${BASE_URL}${url}`, { ...options, redirect: "follow" })
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.status === 204 ? res : res.json())
    .catch((err) => {
      if (err.status === 401) {
        console.log(' window.location', window.location);
        window.location.replace('/')
      }
      console.log(`${err.message} while fetching ${BASE_URL}${url}`)
    });
};

