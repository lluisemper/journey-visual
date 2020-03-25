const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const express = require('express')
const toAsyncRouter = require('./middlewares/errorHandler')

// const router = require('express').Router();
const controller = require('./controller');
const authorization = require('./middlewares/authorization');

const router = toAsyncRouter(express.Router());
// router.post('/login', controller.loginOrg)
// router.post('/registerOrg', controller.registerOrg)
router.post('/journey', authorization, controller.postJourney);
router.post('/:id/persona', authorization, controller.postPersona);
router.post('/:id/step', authorization, controller.postStep);

router.put(`/journeys/:id/update`, authorization, controller.updateJourney);
router.put(`/personas/:id/update`, authorization, controller.updatePersona);
router.put(`/steps/:id/update`, authorization, controller.updateStep);

router.delete(`/journeys/:id/delete`, authorization, controller.deleteJourney);
router.delete(`/personas/:id/delete`, authorization, controller.deletePersona);
router.delete(`/steps/:id/delete`, authorization, controller.deleteStep);

router.post(`/:id/upload`, multer({dest:'./uploads'}).single('file'), controller.postFile);

router.get('/journeys', authorization, controller.getJourneys);
router.get('/:id/personas', authorization, controller.getPersonas);
router.get('/:id/steps', authorization, controller.getSteps);
router.get('/me', authorization, controller.getUser);

module.exports = router;