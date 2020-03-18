const router = require('express').Router();
const controller = require('./controller');

router.post('/login', controller.loginOrg)
router.post('/registerOrg', controller.registerOrg)
router.post('/journey', controller.postJourney)
router.post('/:id/step', controller.postStep)
router.get('/journeys', controller.getJourneys)
router.get('/:id/steps', controller.getSteps)

module.exports = router;