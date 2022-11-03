const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes");

const DbConnect = require("./database");
const cors = require("cors");
const bodyparser = require("body-parser");



const PORT = process.env.PORT || 5500;
const corsOption = {
  origin: ["http://localhost:3000"],
};
//middle ware
app.use(cors(corsOption));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(router);



DbConnect();

app.get("/", (req, res) => {
  res.send("hello form server");
});

app.listen(PORT, () => console.log(`Server is start port ${PORT}`));
