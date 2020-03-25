module.exports = function (app, passport) {
  
  app.get('/auth/google',
  //change scope to get the emmail as well
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {    
        res.redirect(`${process.env.URI}/home`);
    });
}