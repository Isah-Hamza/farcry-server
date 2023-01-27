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

router.get("/:id/details", async (req, res) => {
  const id = req.params.id;
  try {
    const support = await Support.findById(id);
    res.status(200).json({ data: support });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const supports = await Support.find({ email });
    const allCount = (await Support.find({ email })).length;

    const pendingCount = (await Support.find({ email, status: "pending" }))
      .length;
    const verifiedCount = (await Support.find({ email, status: "verified" }))
      .length;
    const inProgressCount = (
      await Support.find({ email, status: "in-progress" })
    ).length;
    const completedCount = (await Support.find({ email, status: "completed" }))
      .length;

    // const allCount = reports.length;

    const analytics = {
      pendingCount,
      allCount,
      verifiedCount,
      inProgressCount,
      completedCount
    };

    res.status(200).json({ data: { supports, analytics } });
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
    const support = await Support.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({ message: "updated successfull", data: support });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
