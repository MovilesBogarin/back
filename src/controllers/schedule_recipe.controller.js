const asyncHandler = require('express-async-handler');
const {schedule_recipes} = require('../static/static');

exports.getScheduledRecipes = asyncHandler(async (req, res) => {
    console.log('Recetas agendadas .|.');
    res.status(200).send(schedule_recipes);
});



exports.createScheduledRecipe = asyncHandler(async (req, res) => {
    try{
        const {id_schedule,id_recipe, quantity, date} = req.body;
        schedule_recipes.push({id_schedule,id_recipe, quantity, date});
        console.log('receta '+id_recipe+' con fecha: '+date +'guardada exitosamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

exports.updateScheduleRecipe = asyncHandler(async (req, res) => {
    try {
  
        
        const { id_schedule, id_recipe, quantity, date } = req.body;
    
        
        
        const index = schedule_recipes.findIndex(schedule => schedule.id_schedule === id_schedule);

        
        schedule_recipes[index] = { id_schedule, id_recipe, quantity, date };


        res.status(200).send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Valio madressss' });
    }
});

exports.deleteScheduleRecipe = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const index = schedule_recipes.findIndex(schedule_recipes => schedule_recipes.id_recipe === parseInt(id));
        schedule_recipes.splice(index, 1);
        console.log('Programacion con ID '+id+' eliminada correctamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});



/*
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
*/