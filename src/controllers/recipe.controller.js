const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    console.log('recetas consultadas');
    res.status(200).send(recipes);
});

exports.createRecipe = asyncHandler(async (req, res) => {
    const {id, name, description, ingredients, steps} = req.body;
    recipes.push({id, name, description, ingredients, steps});
    console.log('receta '+id+' creada correctamente');
    res.status(200).send('OK');
});
