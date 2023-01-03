const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.get("/", (req, res) => res.send("welcome to messages route"));

module.exports = router;

router.post("/", async (req, res) => {
  try {
    const data = { ...req.body, location: "sent" };
    console.log(data);
    const message = new Message(data);
    const newMessage = await message.save();

    res
      .status(201)
      .json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    console.log(email);
    const messages = await Message.find({ from: email });
    res.status(200).json({ data: messages });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.patch("/:messageId", async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const location = req.body.location;
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      { location },
      { new: true }
    );
    res.status(200).json({ message: "Status changed", data: updatedMessage });
  } catch (error) {
    res.status(400).json({ error });
  }
});
