const asyncHandler = require('express-async-handler');
const {recipes, schedule_recipes} = require('../static/static');

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

        const current_scheduled_recipes = schedule_recipes.filter(schedule_recipe => schedule_recipe.id_recipe === id);
        current_scheduled_recipes.forEach(schedule_recipe => {
            const oldChecklists = schedule_recipe.checklists;
            const newChecklists = ingredients.map((ingredient) => {
                const oldChecklist = oldChecklists.find((checklist) => checklist.ingredientId === ingredient.id);
                if (oldChecklist) {
                    return oldChecklist;
                } else {
                    return { ingredientId: ingredient.id, checked: false };
                }
            });
            schedule_recipe.checklists = newChecklists;
        });

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

        schedule_recipes = schedule_recipes.filter(schedule_recipe => schedule_recipe.id_recipe !== parseInt(id));

        console.log('receta '+id+' eliminada correctamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});
