const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipe.controller');

router.get('/', controller.getRecipes);

router.post('/create', controller.createRecipe);

router.put('/:id', controller.updateRecipe);

router.delete('/:id', controller.deleteRecipe);

module.exports = router;