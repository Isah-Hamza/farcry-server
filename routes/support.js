const express = require("express");
const router = express.Router();
const Support = require("../models/support");

router.get("/", async (req, res) => {
  try {
    const supports = await Support.find();
    res.status(200).json({ data: supports });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {
      ...req.body,
      status: "pending",
      assigned_body: {
        name: null,
        address: null
      }
    };
    const support = new Support(data);
    const newSupport = await support.save();
    res
      .status(201)
      .json({ message: "Support request sent successfully", data: newSupport });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const support = await Support.findByIdAndUpdate(id, { ...req.body }, { new: true });
    res.status(200).json({ message: "updated successfull", data: support });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
