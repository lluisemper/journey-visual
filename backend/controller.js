const Step = require('./models/model-steps');
const Journey = require('./models/model-journey');

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
    res.json(step);
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
    res.status(204);
    res.json();
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}
