const express = require("express");
const app = express();

app.use(express.json());

const taskroutes = require ("./routes/taskroutes");

app.use("api/v1/tasks",taskroutes);

module.exports = app;
