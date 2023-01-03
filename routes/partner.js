const express = require("express");
const router = express.Router();
const Partner = require("../models/partner");

router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json({ data: partners });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const partner = { ...req.body };
    const response = new Partner(partner);
    const newParnter = await response.save();
    res.status(200).json({ data: newParnter });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
