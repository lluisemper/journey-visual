const Step = require('./models/model-steps');
const Journey = require('./models/model-journey');
const Persona = require('./models/model-personas');
const User = require('./models/model-user');


exports.postJourney = async (req, res) => {
    const user = await User.findById(req.user._id)
    const journey = await Journey.create({ title: req.body.journey, personas: [] });
    user.journeys.push(journey);
    await user.save();
    res.status(201);
    res.json(journey);
  
}

exports.postPersona = async (req, res) => {
    const journey = await Journey.findById(req.params.id);
    const persona = await Persona.create({ title: req.body.persona, steps: [] });
    journey.personas.push(persona);
    await journey.save();
    res.status(201);
    res.json(persona);
}

exports.postStep = async (req, res) => {
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
}

exports.postFile = async (req, res) => {
    await Persona.findOneAndUpdate({ _id: req.params.id }, {
      imagePath: `${process.env.URL}/${req.file.path}`
    });
    res.status(201);
}

exports.getJourneys = async (req, res) => {
    const journeys = await Journey.find()
    res.status(201);
    res.json(journeys);
}

exports.getPersonas = async (req, res) => {
    const journey = await Journey.findById(req.params.id);
    const personas = await journey.populate('personas').execPopulate();
    res.status(201);
    res.json(personas.personas);
}
exports.getSteps = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    const steps = await persona.populate('steps').execPopulate();
    res.status(201);
    res.json(steps.steps);
}

exports.updateJourney = async (req, res) => {
    await Journey.findOneAndUpdate({ _id: req.params.id },
      {
        title: req.body.title
      }
    )
    res.status(204);
    res.json();
}
exports.updatePersona = async (req, res) => {
    await Persona.findOneAndUpdate({ _id: req.params.id },
      {
        title: req.body.title
      }
    )
    res.status(204);
    res.json();
}

exports.updateStep = async (req, res) => {
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
}

exports.getUser = async (req, res) => {
    res.json(req.user)
}

exports.deleteJourney = async (req, res) => {
    const journey = await Journey.findById(req.params.id);
    journey.personas.map(async (personaId) => {
      const persona = await Persona.findById(personaId);
      persona.steps.map(async stepId => {
        await Step.deleteOne({ _id: stepId });
      })
      await Persona.deleteOne({ _id: personaId });
    })
    Journey.deleteOne({ _id: req.params.id }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    res.status(204).send();
}
exports.deletePersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    persona.steps.map(async (id) => {
      console.log(id)
      await Step.deleteOne({ _id: id });
    })
    Persona.deleteOne({ _id: req.params.id }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    res.status(204).send();
}
exports.deleteStep = async (req, res) => {
    Step.deleteOne({ _id: req.params.id }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    res.status(204).send();
}
