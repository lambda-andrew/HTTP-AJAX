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
    name: 'Fiona',
    age: 24,
    email: 'Fiona@gallengerclan.com',
  },
  {
    id: 2,
    name: 'Lip',
    age: 18,
    email: 'Lip@gallengerclan.com',
  },
  {
    id: 3,
    name: 'Ian',
    age: 17,
    email: 'Ian@gallengerclan.com',
  },
  {
    id: 4,
    name: 'Debbie',
    age: 12,
    email: 'Debbie@gallengerclan.com',
  },
  {
    id: 5,
    name: 'Carl',
    age: 11,
    email: 'Carl@gallengerclan.com',
  },
  {
    id: 6,
    name: 'Liam',
    age: 4,
    email: 'Liam@gallengerclan.com',
  },
  {
    id: 7,
    name: 'Frank',
    age: 47,
    email: 'Frank@gallengerclan.com',
  },
  {
    id: 8,
    name: 'Monica',
    age: 47,
    email: 'Monica@gallengerclan.com',
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
