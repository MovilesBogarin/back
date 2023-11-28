const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    const formattedRecipes = recipes.reduce((recipe) => {
        return {
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
        };
    });
    console.log('recetas consultadas');
    res.status(200).send(formattedRecipes);
});

exports.getRecipe = asyncHandler(async (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipeId === recipe.id);
    if (recipe) {
        console.log('receta '+recipeId+' consultada');
        res.status(200).send(recipe);
    } else {
        console.log('receta '+recipeId+' no encontrada');
        res.status(404).send('Recipe not found');
    }
});

exports.createRecipe = asyncHandler(async (req, res) => {
    const newId = recipes.length + 1;
    recipes.push({
        id: newId,
        name: 'Nueva receta',
        description: 'Descripción de la nueva receta',
        ingredients: [],
        steps: [],
    });
    console.log('receta '+newId+' creada');
    res.status(200).send('ok');
});
