// GLOBAL VARIABLES
global.__base = __dirname + '/';

// IMPORTS
const express = require('express');
const app = express();
const routes = require(__base+'routes/api');
const env = require(__base+'env.js');
const config = require(__base+'config.js')[env.currentEnv];
const bodyParser = require('body-parser');
const cors = require('cors')

// CORS ENABLED. PLEASE DISABLE IN PRODUCTION
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(config.server.port, function() {
  console.log("Server started on port 4000");
});
