const asyncHandler = require('express-async-handler');
const {recipes} = require('../static/static');

exports.getRecipes = asyncHandler(async (req, res) => {
    console.log('recetas consultadas');
    res.status(200).send(recipes);
});

exports.createRecipe = asyncHandler(async (req, res) => {
    try{
        const {id, name, description, ingredients, steps} = req.body;
        recipes.push({id, name, description, ingredients, steps});
        console.log('receta '+id+' creada correctamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

exports.updateRecipe = asyncHandler(async (req, res) => {
    try {
        const {id, name, description, ingredients, steps} = req.body;
        const index = recipes.findIndex(recipe => recipe.id === id);
        recipes[index] = {id, name, description, ingredients, steps};
        console.log('receta '+id+' actualizada correctamente');
        res.status(200).send('OK');

    } catch (error) {
        res.status(400).send(error.message);
    }
});

exports.deleteRecipe = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const index = recipes.findIndex(recipe => recipe.id === parseInt(id));
        recipes.splice(index, 1);
        console.log('receta '+id+' eliminada correctamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});
