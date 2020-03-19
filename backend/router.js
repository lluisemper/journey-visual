const router = require('express').Router();
const controller = require('./controller');

// router.post('/login', controller.loginOrg)
// router.post('/registerOrg', controller.registerOrg)
router.post('/journey', controller.postJourney)
router.post('/:id/journey', controller.postJourney)
router.post('/:id/step', controller.postStep)
router.post(`/steps/:id/update`, controller.updateStep);
router.get('/journeys', controller.getJourneys)
router.get('/:id/personas', controller.getPersonas)
router.get('/:id/steps', controller.getSteps)


module.exports = router;