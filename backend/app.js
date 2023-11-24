const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

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
