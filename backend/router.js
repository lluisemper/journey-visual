const router = require('express').Router();
const controller = require('./controller');
const authorization = require('./middlewares/authorization');

// router.post('/login', controller.loginOrg)
// router.post('/registerOrg', controller.registerOrg)
router.post('/journey', authorization, controller.postJourney);
router.post('/:id/persona', authorization, controller.postPersona);
router.post('/:id/step', authorization, controller.postStep);

router.post(`/journeys/:id/update`, authorization, controller.updateJourney);
router.post(`/personas/:id/update`, authorization, controller.updatePersona);
router.post(`/steps/:id/update`, authorization, controller.updateStep);

router.post(`/journeys/:id/delete`, authorization, controller.deleteJourney);
router.post(`/personas/:id/delete`, authorization, controller.deletePersona);
router.post(`/steps/:id/delete`, authorization, controller.deleteStep);

router.get('/journeys', authorization, controller.getJourneys);
router.get('/:id/personas', authorization, controller.getPersonas);
router.get('/:id/steps', authorization, controller.getSteps);
router.get('/me', authorization, controller.getUser);

module.exports = router;