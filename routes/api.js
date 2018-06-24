// IMPORTS
const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const env = require(__base+'env.js');
const config = require(__base+'config.js')[env.currentEnv];
const url = 'mongodb://'+config.database.user+':'+config.database.pass+'@'+config.database.host+':'+config.database.port+'/'+config.database.db;
const db = mongo(url);
const helpers = require(__base+'helpers');

router.get('/',function(req,res,next) {
  res.send("Welcome to stories server api");
});

router.get('/posts',function(req,res) {
  db.posts.find(function(err,posts) {
    if(err) {
      res.send("Unable to fetch posts");
    }
    else {
      res.json(posts);
    }
  })
});

router.get('/posts/:id',function(req,res) {
  const findObject = {
    _id: mongo.ObjectId(req.params.id)
  }
  db.posts.find(findObject, function(err,posts) {
    if(err) {
      res.send("Unable to fetch posts");
    }
    else {
      res.json(posts);
    }
  })
});

router.post('/posts', function(req,res) {
  console.log(req.body);
  res.send({"status":"success"});
});

router.put('/posts/:id', function(req,res) {
  res.send("THIS IS AN UPDATE REQUEST");
})

router.delete('/posts/:id', function(req, res) {
  res.send("THIS IS A DELETE REQUEST");
})

module.exports = router;
