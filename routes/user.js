const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { comparePassword, hashPassword } = require("../utilities/functions");

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
    const password = req.body.old_password;
    const new_password = req.body.new_password;

    if (password) {
      const userObj = await User.findById(_id);
      if (await comparePassword(password, userObj.password)) {
        const hashedPassword = await hashPassword(new_password);
        const user = await User.findByIdAndUpdate(
          _id,
          { password: hashedPassword },
          { new: true }
        );
        return res
          .status(200)
          .json({ data:user, message: "Password changed successfully" });
      } else {
        return res.status(400).json({ message: "Incorrect old password" });
      }
    } else {
      const user = await User.findByIdAndUpdate(
        _id,
        { ...req.body },
        { new: true }
      );
      res.status(200).json({ message: "Update successful", data: user });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
