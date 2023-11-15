const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Finds all categories with its associated Products
router.get('/', async (req, res) => {
  const allCategories = await Category.findAll({
    include: [{model: Product}]
  });
  res.json(allCategories);
});

// Finds one category by its `id` value with its associated Products
router.get('/:id', async (req, res) => {
  const categoryId = await Category.findByPk(req.params.id, {
    include: [{model: Product}]
  });
  res.json(categoryId);
});

// Creates a new category
router.post('/', async (req, res) => {
  const createCategory = await Category.create(req.body);
  res.json(`${req.method} request received`);
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  const categoryId = await Category.findByPk(req.params.id);
  await categoryId.update(req.body);
  await categoryId.save();
  res.json(`${req.method} request received`);
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  const deleteCategory = await Category.findByPk(req.params.id);
  await deleteCategory.destroy();
  res.json(`${req.method} request received`);
});

module.exports = router;
