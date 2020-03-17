const Organization = require('./models/model-organization');
const User = require('./models/model-user');
const Steps = require('./models/model-steps');

exports.loginOrg = async (req, res) => {
  try {
    console.log('req.body',req.body.loginOrg);
    const org = await Organization.findOne({id: profile.id})

      res.json(org);
    
    
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}