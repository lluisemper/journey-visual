const router = require('express').Router();
const controller = require('./controller');

router.post('/login', controller.loginOrg)
router.post('/registerOrg', controller.registerOrg)
router.post('/', controller.postJourney)
router.post('/', controller.postSteps)

module.exports = router;