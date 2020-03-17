require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
require('./database');

const PORT = 4000;

app.use(cors({origin:"http://localhost:3000", credentials:true}));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});