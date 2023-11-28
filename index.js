const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Routers
const recipeRouter = require('./src/routers/recipe.route');
app.use('/recipes', recipeRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Hola, bienvenido a mi API')
});

// Start listening on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});