const dayjs = require("dayjs");
const asyncHandler = require("express-async-handler");
const { schedule_recipes, recipes } = require("../static/static");

exports.getScheduledRecipes = asyncHandler(async (req, res) => {
  console.log("Recetas agendadas .|.");
  res.status(200).send(schedule_recipes);
});

exports.getScheduledRecipesByDate = asyncHandler(async (req, res) => {
  try {
    const { date } = req.body;
    const scheduled_recipes = schedule_recipes.filter(
      (schedule_recipes) => schedule_recipes.date === date
    );
    const schedule_recipes_ids = scheduled_recipes.map(
      (schedule_recipes) => schedule_recipes.id_recipe
    );
    const recipes_filtered = recipes.filter((recipe) =>
      schedule_recipes_ids.includes(recipe.id)
    );
    const scheduled_recipes_with_recipe = scheduled_recipes.map(
      (scheduled_recipe) => {
        const recipe = recipes_filtered.find(
          (recipe) => recipe.id === scheduled_recipe.id_recipe
        );
        return { ...scheduled_recipe, recipe };
      }
    );
    res.status(200).send(scheduled_recipes_with_recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

exports.getScheduledRecipesByDaysRange = asyncHandler(async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    const dates = [];
    const start = dayjs(startDate);
    const end = dayjs(endDate).add(1, "day");
    let current = start;
    while (current.isBefore(end)) {
      dates.push(current.format("YYYY-MM-DD"));
      current = current.add(1, "day");
    }
    const scheduled_recipes = schedule_recipes.filter((schedule_recipes) =>
      dates.includes(schedule_recipes.date)
    );
    const schedule_recipes_ids = scheduled_recipes.map(
      (schedule_recipes) => schedule_recipes.id_recipe
    );
    const recipes_filtered = recipes.filter((recipe) =>
      schedule_recipes_ids.includes(recipe.id)
    );
    const scheduled_recipes_with_recipe = scheduled_recipes.map(
      (scheduled_recipe) => {
        const recipe = recipes_filtered.find(
          (recipe) => recipe.id === scheduled_recipe.id_recipe
        );
        return { ...scheduled_recipe, recipe };
      }
    );
    res.status(200).send(scheduled_recipes_with_recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

exports.createScheduledRecipe = asyncHandler(async (req, res) => {
  try {
    const { id_schedule, id_recipe, quantity, date, checked, recipe } =
      req.body;
    schedule_recipes.push({
      id_schedule,
      id_recipe,
      quantity,
      date,
      checked,
      recipe,
    });
    console.log(
      "receta " + id_recipe + " con fecha: " + date + "guardada exitosamente"
    );
    res.status(200).send("OK");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

exports.updateScheduleRecipe = asyncHandler(async (req, res) => {
  try {
    const { id_schedule, id_recipe, quantity, date, checked, recipe } =
      req.body;
    const index = schedule_recipes.findIndex(
      (schedule) => schedule.id_schedule === id_schedule
    );

    schedule_recipes[index] = {
      id_schedule,
      id_recipe,
      quantity,
      date,
      checked,
      recipe,
    };

    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Valio madressss" });
  }
});

exports.deleteScheduleRecipe = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const index = schedule_recipes.findIndex(
      (schedule_recipes) => schedule_recipes.id_recipe === parseInt(id)
    );
    schedule_recipes.splice(index, 1);
    console.log("Programacion con ID " + id + " eliminada correctamente");
    res.status(200).send("OK");
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
