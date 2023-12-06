exports.recipes = [
  {
    id: 1,
    name: "Pasta",
    description: "Pasta with tomato sauce",
    ingredients: [
      { id: 1, name: "Pasta", quantity: 200, unit: "gr" },
      { id: 2, name: "Tomato", quantity: 2, unit: "u" },
      { id: 3, name: "Salt", quantity: 1, unit: "pz" },
      { id: 4, name: "Pepper", quantity: 1, unit: "pz" },
    ],
    steps: [
      "Boil the water",
      "Add the pasta",
      "Cook it",
      "Add the tomato sauce",
      "Add the salt and pepper",
    ],
  },
  {
    id: 2,
    name: "Pizza",
    description: "Pizza with tomato sauce",
    ingredients: [
      { id: 5, name: "Flour", quantity: 200.5, unit: "gr" },
      { id: 6, name: "Tomato", quantity: 2, unit: "u" },
      { id: 7, name: "Salt", quantity: 1, unit: "pz" },
      { id: 8, name: "Pepperoni", quantity: 60, unit: "gr" },
    ],
    steps: [
      "Make the dough",
      "Add the tomato sauce",
      "Add the pepperoni",
      "Bake it",
    ],
  },
];
exports.schedule_recipes = [
  {
    id_schedule: 1,
    id_recipe: 1,
    quantity: 5,
    date: "2023-12-15",
    checked: false,
    checklists: [
      { ingredientId: 1, checked: false },
      { ingredientId: 2, checked: false },
      { ingredientId: 3, checked: false },
      { ingredientId: 4, checked: false },
    ],
  },
  {
    id_schedule: 2,
    id_recipe: 2,
    quantity: 10,
    date: "2023-12-15",
    checked: false,
    checklists: [
      { ingredientId: 5, checked: false },
      { ingredientId: 3, checked: false },
      { ingredientId: 4, checked: false },
      { ingredientId: 6, checked: false },
    ],
  },
];
