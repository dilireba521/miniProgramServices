const express = require("express");
const Template = require("../model/template")
const router = express.Router();

router.get("/template", async (req, res) => {
  const temps = await Template.find({}).sort({ update_at: -1 });
  res.$success(temps);
})

router.get("/template/:id", async (req, res) => {
  const temps = await Template.findById({ _id: req.params.id });
  if (temps) {
    res.$success(temps);
  } else {
    res.$success({}, 400);
  }
})

router.post("/template", async (req, res) => {
  try {
    const temps = await Template.create(req.body);
    res.$success(temps)
  } catch (error) {
    res.$error(error);
  }

})

router.put("/template/:id", async (req, res) => {
  const temps = await Template.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
  if (temps) {
    res.$success(temps)
  } else {
    res.$error("更新失败", 400);
  }

})
router.delete("/template/:id", async (req, res) => {
  try {
    await Template.findByIdAndRemove({ _id: req.params.id });
    res.$success("删除成功")
  } catch (error) {
    res.$error(error);
  }

})
module.exports = router;