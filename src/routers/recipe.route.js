const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipe.controller');

router.get('/', controller.getRecipes);

router.get('/:id', controller.getRecipe);

router.post('/create', controller.createRecipe);

// router.put('/:id', controller.updateItem);

// router.delete('/:id', controller.deleteItem);

module.exports = router;