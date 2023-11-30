const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    console.log('recetas consultadas');
    res.status(200).send(recipes);
});

exports.create = asyncHandler(async (req, res) => {
    const {recipe} = req.body;
    recipes.push(recipe);
    console.log('receta '+recipe.id+' creada correctamente');
    res.status(200).send('OK');
});
