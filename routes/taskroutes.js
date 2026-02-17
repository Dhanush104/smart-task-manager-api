// File: routes/taskroutes.js
const express = require("express");
const router = express.Router(); 

// Import the functions from the separate controller file
const {
  getTasks,
  createTask,
  getTaskByid,
  updateTask,
  deleteTask
} = require("../controllers/taskcontrollers"); // Ensure this path is correct

const { protect } = require("../middleware/authMiddleware");

router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);
router.route("/:id")
  .get(protect, getTaskByid)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router; 