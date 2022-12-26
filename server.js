require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/auth", authRouter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Farcry api");
});

mongoose.connect(process.env.DATABASE_URL);
mongoose.set('strictQuery', true);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'));

app.listen(port, () => console.log("server started on port", port));
