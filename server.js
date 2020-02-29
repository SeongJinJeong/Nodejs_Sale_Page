const express = require("express");
const app = express();
const route = require("./routes/route.js");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

app.use("/", route);

app.get("/", (req, res) => {
  res.send(
    "<div style='text-align:center;font-size:100px'>It's Working!</div>"
  );
});

app.listen(port, () => {
  console.log(`Server Starts at ${port} port!!`);
});
