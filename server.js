const express = require('express');
const app = express();

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

app.listen(8000, function () {
  console.log("server is running");
})