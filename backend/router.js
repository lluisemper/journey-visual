const router = require('express').Router();
const controller = require('./controller');

//example
router.post('/login', controller.loginOrg)

module.exports = router;