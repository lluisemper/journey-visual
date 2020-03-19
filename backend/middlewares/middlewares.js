module.exports = function (app, passport) {
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {      
      res.cookie('cookie', req.user._id);
      res.redirect('http://localhost:3000/dashboard');
    });
}