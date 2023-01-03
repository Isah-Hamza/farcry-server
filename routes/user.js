const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({ message: "Update successful", data: user });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
