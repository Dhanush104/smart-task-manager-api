const express = require("express");
const app = express();




app.use(express.json());

const taskroutes = require ("./routes/taskroutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/tasks",taskroutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;
