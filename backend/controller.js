<<<<<<< HEAD
// const Organization = require('./models/model-organization');
// const User = require('./models/model-user');
const Step = require('./models/model-steps');
=======
const User = require('./models/model-user');
const Steps = require('./models/model-steps');
>>>>>>> e53d5030fa7d4f823028d3fd76d6a8de6020b9ba
const Journey = require('./models/model-journey');
// const mongoose = require('mongoose');

<<<<<<< HEAD
// exports.loginOrg = async (req, res) => {
//   try {    //sort out object user schema
//     const org = await Organization.findOne({ name: req.body.organization, username: req.body.username, password: req.body.password })
//     console.log('org', org);
//     if (org === null) {
//       res.status(404).send('Something broke!')
//     } else {
//       res.status(201);
//       res.json(org);
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(500).send();
//   }
// }

// exports.registerOrg = async (req, res) => {
//   try {
//     console.log('req', req.body);
//     const user = await Organization.create({ name: req.body.organization });
//     res.status(201);
//     res.json(user);
//   } catch (error) {
//     console.log(error)
//     res.status(500).send();
//   }
// }

exports.postStep = async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    const step = await Step.create({
      title: req.body.title,
      emotion: req.body.emotion,
      score: req.body.score
    })
    journey.steps.push(step._id);
    await journey.save();
    // res.json(journey);
    res.status(201);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postJourney = async (req, res) => {
  try {
    const journey = await Journey.create({ title: req.body.journey, steps: [] });
    res.status(201);
    res.json(journey);
=======
exports.postStep = async (req, res) => {
  try {
    const journey = await Journey.Model.findById(req.params.id);
    journey.steps.push(
      {
        title: req.body.title,
        emotion: req.body.emotion,
        score: req.body.score
      });
    await journey.save();
    res.json(journey);
    res.status(201);
>>>>>>> e53d5030fa7d4f823028d3fd76d6a8de6020b9ba
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}

exports.getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find()
    res.status(201);
    res.json(journeys);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.getSteps = async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    const steps = await journey.populate('steps').execPopulate();
    res.status(201);
    res.json(steps.steps);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.updateStep = async (req, res) => {
  try {
    await Step.findOneAndUpdate({ _id: req.params.id },
      {
        title: req.body.title,
        emotion: req.body.emotion,
        score: req.body.score
      }
    )
    res.status(201);
<<<<<<< HEAD
    res.json();
=======
    res.json(journey.steps);
>>>>>>> e53d5030fa7d4f823028d3fd76d6a8de6020b9ba

  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}
