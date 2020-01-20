const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
	{name:'Mark'},
  { name: 'Jill' },
  { name: 'Tim' },
  { name: 'Greg' },
  { name: 'Ken' },
]

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: "successfully got users.",
    users: mockUserData
  })
})

app.get('/user/:id', function (req, res) {
  console.log(res)
  res.json({
    success: true,
    message: "successfully got one user.",
    user: req.params.id
  })
})

app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "someThing";
  const mockPassword = "hardToHack";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'Match!',
      token: 'encrypted token goes here!'
    })
  } else {
    res.json({
      success: false,
      message: 'Not match!'
    })
  }
})

app.get('/match', function (req, res) {
  res.json({
    success: true,
    message: "You arrive at a new endpoint!"
  })
})

app.listen(8000, function () {
  console.log("server is running");
})