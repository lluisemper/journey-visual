const authorization = async (req, res, next) => {
  console.log('req.cookies',req.cookies);
  
    if (!req.cookies.cookie) {
      res.status(401).send();
    } else {
      next();
    }
    
}

module.exports = authorization