const router = require('express').Router();
const controller = require('./controller');

router.post('/login', controller.loginOrg)
router.post('/registerOrg', controller.registerOrg)
router.post('/postJourney', controller.postJourney)
router.post('/', controller.postSteps)
router.get('/journeys', controller.getJourneys)

module.exports = router;