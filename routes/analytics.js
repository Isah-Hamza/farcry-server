const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Support = require("../models/support");
const Report = require("../models/report");
const Partner = require("../models/partner");
// const Partners

router.get("/", async (req, res) => {
  try {
    const partnerCount = (await Partner.find()).length;
    const supportCount = (await Support.find()).length;
    const reportCount = (await Report.find()).length;
    const userCount = (await User.find()).length;

    const data = {
      total_users: userCount,
      total_cases: supportCount + reportCount,
      total_parnters: partnerCount
    };

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
