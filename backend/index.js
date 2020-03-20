const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
require('./database');
const passport = require('./configAuth');
const session = require('express-session')

const PORT = 4000;

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares/middlewares")(app, passport)

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});