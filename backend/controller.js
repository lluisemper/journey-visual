const Step = require('./models/model-steps');
const Journey = require('./models/model-journey');
const Persona = require('./models/model-personas');
const User = require('./models/model-user');


exports.postJourney = async (req, res) => {
  try {    
    const user = await User.findById(req.user._id)
    console.log('user', user);
    
    const journey = await Journey.create({ title: req.body.journey, personas: [] });
    user.journeys.push(journey);
    await user.save();
    res.status(201);
    res.json(journey);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}

exports.postPersona = async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    const persona = await Persona.create({ title: req.body.persona, steps: [] });
    journey.personas.push(persona);
    await journey.save();
    res.status(201);
    res.json(persona);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}

exports.postStep = async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    const step = await Step.create({
      title: req.body.step.title,
      comments: req.body.step.comments,
      emotion: req.body.step.emotion,
      score: req.body.step.score
    })
    persona.steps.splice(req.body.index, 0, step._id);
    await persona.save();
    res.json(persona.steps);
    res.status(201);
  } catch (error) {
    console.log(error)
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

exports.getPersonas = async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    const personas = await journey.populate('personas').execPopulate();
    res.status(201);
    res.json(personas.personas);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}
exports.getSteps = async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    const steps = await persona.populate('steps').execPopulate();
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
        comments: req.body.comments,
        emotion: req.body.emotion,
        score: req.body.score
      }
    )
    res.status(204);
    res.json();
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.getUser = async (req, res) => {
  try {
    res.json(req.user)
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}
