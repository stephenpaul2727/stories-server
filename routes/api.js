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
  db.posts.find({_id: mongo.ObjectId(req.params.id)}, function(err,post) {
    if(err || !post) res.status(400).json({"error":err});
    else res.json({"status":"success","message":post})
  });
});

router.post('/posts', function(req,res) {
  console.log(req.body);
  db.posts.save(req.body, function(err, savedPost) {
    if(err || !savedPost) res.status(400).json({"error": err});
    else res.json({"status":"success","message":savedPost});
  })
});

router.put('/posts/:id', function(req,res) {
  console.log("Modifying "+mongo.ObjectId(req.params.id));
  db.posts.remove({_id :mongo.ObjectId(req.params.id)});
  db.posts.save(req.body,function(err,post){
    if(err || !post) res.status(400).json({"error":err});
    else res.json({"status":"success","message":post});
  });
})

router.delete('/posts/:id', function(req, res) {
  console.log("Deleting "+mongo.ObjectId(req.params.id));
  db.posts.remove({_id: mongo.ObjectId(req.params.id)});
  res.json({"status":"success"});
})

module.exports = router;
