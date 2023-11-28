const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    console.log('recetas consultadas');
    res.status(200).send(recipes);
});

exports.getRecipe = asyncHandler(async (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipeId === recipe.id);
    if (recipe) {
        res.status(200).send(recipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});
