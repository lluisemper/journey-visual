const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const router = require('./router');
require('./database');
const passport = require('./configAuth');
const session = require('express-session');
const path = require('path');


const PORT = process.env.PORT;

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 } }))

app.use('/uploads', express.static('./uploads'))

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares/middlewares")(app, passport)

app.use(cors({ origin: process.env.URI, credentials: true }));

app.use(express.json());

app.use(router);

if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '..', 'client', 'build');
  app.use(express.static(clientPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});