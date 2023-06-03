const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3030;

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
