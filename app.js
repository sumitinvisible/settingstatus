const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressiions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressiions/:ido', (req, res, next) => {
  const foundExpression = getElementById(req.params.ido, expressions);
  console.log(req.params);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send("chill there is nothing to loop ri8 now");
  }
});
const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];
app.get('/j', (req, res, next) => {
  res.send(monsters);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
