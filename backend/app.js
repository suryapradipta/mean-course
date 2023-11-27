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
  post.save();

  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
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


module.exports = app;
