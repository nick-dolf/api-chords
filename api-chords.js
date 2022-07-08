const PORT = 4012;
const express = require('express');
const app = express();

app.use(express.json());

const song = [
  [{ string: 0, fret: 1, finger: 1},
  { string: 1, fret: 2, finger: 2},
  { string: 3, fret: 2, finger: 3}],
  [{ string: 1, fret: 1, finger: 1},
  { string: 2, fret: 2, finger: 2},
  { string: 3, fret: 2, finger: 3}],
]



app.get('/', (req, res) => {
  res.send(song)
})

app.listen(PORT, () => {console.log(`listening on port ${PORT}...`)} )
