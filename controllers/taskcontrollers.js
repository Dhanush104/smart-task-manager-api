// File: controllers/taskcontrollers.js
const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
   try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask =async (req, res) => {
    try{
    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskByid = (req, res) => {
    res.send("Get particular task controllers");
};

exports.updateTask = (req, res) => {
    res.send("update particular task");
};

exports.deleteTask = (req, res) => {
    res.send("delete the particular task");
};
