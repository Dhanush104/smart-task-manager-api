// File: controllers/taskcontrollers.js
const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
   try {
    const tasks = await Task.find({ user: req.user._id });

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
    const task = await Task.create({
        ...req.body,
        user: req.user._id
      });

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskByid = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.status(200).json({
      success: true,
      data: task
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedTask
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

