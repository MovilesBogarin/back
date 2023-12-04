const dayjs = require('dayjs');
const asyncHandler = require('express-async-handler');
const {schedule_recipes, recipes} = require('../static/static');

exports.getScheduledRecipes = asyncHandler(async (req, res) => {
    console.log('Recetas agendadas .|.');
    res.status(200).send(schedule_recipes);
});

exports.createScheduledRecipe = asyncHandler(async (req, res) => {
    try{
        const {id_schedule,id_recipe, quantity, date, recipe} = req.body;
        schedule_recipes.push({id_schedule,id_recipe, quantity, date,recipe});
        console.log('receta '+id_recipe+' con fecha: '+date +'guardada exitosamente');
        res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

exports.updateScheduleRecipe = asyncHandler(async (req, res) => {
    try {
  
        
        const { id_schedule, id_recipe, quantity, date, recipe } = req.body;
    
        
        
        const index = schedule_recipes.findIndex(schedule => schedule.id_schedule === id_schedule);

        
        schedule_recipes[index] = { id_schedule, id_recipe, quantity, date, recipe };


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

