const express = require('express');
const app = express();
var routes = require('./routes/api');

// CORS ENABLED. PLEASE DISABLE IN PRODUCTION
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api',routes);

app.listen(4000, function() {
  console.log("Server started on port 4000");
})
