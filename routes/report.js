const express = require("express");
const router = express.Router();
const Report = require("../models/report");

router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json({ data: reports });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = { ...req.body };
    const report = new Report(data);
    const newReport = await report.save();
    res
      .status(201)
      .json({ message: "Report sent successfully", data: newReport });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
