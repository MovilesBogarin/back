const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    console.log('recetas consultadas');
    res.status(200).send(recipes);
});

exports.updateOrCreateRecipe = asyncHandler(async (req, res) => {
    const {id, name, description, ingredients, steps} = req.body;
    const recipe = recipes.find(recipe => recipe.id === id);
    if (recipe) {
        recipe.name = name;
        recipe.description = description;
        recipe.ingredients = ingredients;
        recipe.steps = steps;
        console.log('receta '+id+' actualizada');
        res.status(200).send(recipe);
    } else {
        recipes.push({
            id,
            name,
            description,
            ingredients,
            steps
        });
        const newRecipe = recipes.find(recipe => recipe.id === id);
        console.log('receta '+id+' creada');
        res.status(200).send(newRecipe);
    }
});
