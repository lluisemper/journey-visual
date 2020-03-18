module.exports = function (app, passport) {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      console.log('req',req);
      
      res.cookie('cookie', req.user._id);
      res.redirect(process.env.URL);
    });

}