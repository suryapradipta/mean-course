const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://suryapradipta8:YbD9iQZZnpj27RNN@cluster0.o16ojiv.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(()=>{
    console.log("connected to database");
  })
  .catch(()=>{
    console.log("connection failed");
  })
app.use(bodyParser.json());
app.use(cors());


app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(createdPost => {
    console.log(createdPost); // Note: Use createdPost instead of post
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  })
    .catch(error => {
      // Handle the error appropriately
      console.error(error);
      res.status(500).json({
        message: 'An error occurred while saving the post'
      });
    });
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents =>{
    res.status(200).json({
      message: 'Post fetched successfully',
      posts: documents
    });
  })
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result=>{
    console.log(result);
    res.status(200).json({message: "Post deleted!"});
  });
});

app.put("/api/posts/:id", (req, res, next)=>{
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post).then(result=>{
    console.log(result);
    res.status(200).json({message: "Update successfully!"});

  })
});


module.exports = app;
