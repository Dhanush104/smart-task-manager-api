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

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTaskByid);
router.put("/:id", updateTask); // This will now find a real function
router.delete("/:id", deleteTask);

module.exports = router; 