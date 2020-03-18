const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
require('./database');
const cookieParser = require('cookie-parser');
const passport = require('./configAuth');


const PORT = 4000;

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});