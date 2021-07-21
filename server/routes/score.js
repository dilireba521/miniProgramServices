const express = require("express");
const Score = require("../model/score");
const router = express.Router();

router.get("/score", async (req, res) => {
  const _search = req.query['search'] || "";
  const temps = await Score.find({ name: { $regex: _search } }).sort({ update_at: -1 });
  res.$success(temps);
})

router.get("/score/:id/", async (req, res) => {
  const temps = await Score.find({ _id: req.params.id });
  if (temps)
    res.$success(temps)
  else
    res.$success({}, 400)
})

router.post("/score", async (req, res) => {
  try {
    req.body['createTime'] = new Date().getTime().toString();
    const temps = await Score.create(req.body);
    res.$success(temps)
  } catch (error) {
    res.$error(error)
  }
})
router.put("/score/:id/", async (req, res) => {
  const temps = await Score.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
  if (temps) {
    res.$success(temps)
  } else {
    res.$error("更新失败", 400);
  }
})
router.delete("/template/:id/", async (req, res) => {
  try {
    await Score.findByIdAndRemove({ _id: req.params.id });
    res.$success("删除成功")
  } catch (error) {
    res.$error(error);
  }

})
module.exports = router;