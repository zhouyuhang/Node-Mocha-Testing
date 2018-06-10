const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.status(200).send([
    {
    name: 'Alex',
    age: 30
    },
    {
    name: 'Brandon',
    age: 35
    },
    {
    name: 'Mike',
    age: 27
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
