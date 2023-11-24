const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/post');
const mongoose = require('mongoose');

const app = express();

const username = encodeURIComponent("suryapradipta8");
const password = encodeURIComponent("");
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

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'id1',
      title: 'First ever side post',
      content: 'This is coming from the server'
    },
    {
      id: 'id1',
      title: 'First ever side post',
      content: 'This is coming from the server'
    },
  ];

  // chaining the status method to json method
  res.status(200).json({
    message: 'Post fetched successfully',
    posts: posts
  });
});


module.exports = app;
