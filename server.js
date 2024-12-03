const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { connectDatabase } = require("./config/dbConfig");
require("dotenv").config();
connectDatabase();

app.use(express.json());
app.use(
  cors({
    origin: ["https://hilarious-squirrel-370128.netlify.app"],
  })
);

// https://doctor-appointment-syste-7b5fc.web.app

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorsRoute = require("./routes/doctorsRoute");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorsRoute);

// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "client", "build")));
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
