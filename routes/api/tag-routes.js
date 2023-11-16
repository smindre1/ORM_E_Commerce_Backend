const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Finds all tags and includes its associated Product data
router.get("/", async (req, res) => {
  const allTags = await Tag.findAll({
    include: [{ model: Product }],
  });
  res.json(allTags);
});

// Finds a single tag's data by its `id` and includes its associated Product data
router.get("/:id", async (req, res) => {
  const tagId = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  res.json(tagId);
});

// Creates a new tag
router.post("/", async (req, res) => {
  const createTag = await Tag.create(req.body);
  res.json(`${req.method} request received`);
});

// Updates a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  const tagId = await Tag.findByPk(req.params.id);
  await tagId.update(req.body);
  await tagId.save();
  res.json(`${req.method} request received`);
});

// Deletes a tag based on its `id` value
router.delete("/:id", async (req, res) => {
  const deleteTag = await Tag.findByPk(req.params.id);
  await deleteTag.destroy();
  res.json(`${req.method} request received`);
});

module.exports = router;
