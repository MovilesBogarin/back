const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedule_recipe.controller');


router.get('/', controller.getScheduledRecipes);
router.post('/create', controller.createScheduledRecipe);
router.put('/update', controller.updateScheduleRecipe);
router.delete('/delete/:id',controller.deleteScheduleRecipe);
router.post('/by-date', controller.getScheduledRecipesByDate);
router.post('/by-range', controller.getScheduledRecipesByDaysRange);


/*
router.get('/', controller.getRecipes);

router.post('/shce/create', controller.createRecipe);

router.put('/:id', controller.updateRecipe);

router.delete('/:id', controller.deleteRecipe);
*/

module.exports = router;