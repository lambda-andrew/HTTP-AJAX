const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Chandler',
    age: 30,
    email: 'chandler@lambdaschool.com',
  },
  {
    id: 2,
    name: 'Monica',
    age: 30,
    email: 'monica@lambdaschool.com',
  },
  {
    id: 3,
    name: 'Joey',
    age: 31,
    email: 'Joey@lambdaschool.com',
  },
  {
    id: 4,
    name: 'Rachel',
    age: 29,
    email: 'rachel@lambdaschool.com',
  },
  {
    id: 5,
    name: 'Ross',
    age: 32,
    email: 'ross@lambdaschool.com',
  },
  {
    id: 6,
    name: 'Phoebe',
    age: 27,
    email: 'Pheobe@lambdaschool.com',
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
