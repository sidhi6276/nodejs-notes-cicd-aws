const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const FILE = 'notes.json';

// get all notes
app.get('/notes', (req, res) => {
  const data = fs.readFileSync(FILE);
  res.json(JSON.parse(data));
});

// add note
app.post('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(FILE));
  notes.push(req.body);
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
  res.send({ status: 'saved' });
});

// delete notes (for clear all and individual delete)
app.post('/notes/delete', (req, res) => {
  fs.writeFileSync(FILE, JSON.stringify(req.body, null, 2));
  res.send({ status: 'deleted' });
});

app.listen(5000, () => console.log("Server running on port 5000"));
