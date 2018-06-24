const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const url = 'mongodb://dbadmin:rootpass123@ds115971.mlab.com:15971/stories-db';
const db = mongo(url);
const isEmpty = require('../helpers');

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
});

router.put('/posts/:id', function(req,res) {
  res.send("THIS IS AN UPDATE REQUEST");
})

router.delete('/posts/:id', function(req, res) {
  res.send("THIS IS A DELETE REQUEST");
})

module.exports = router;
