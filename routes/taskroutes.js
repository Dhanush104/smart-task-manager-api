const express = require ("express");
const router = express.Router(); 

const {
  getTasks,
  createTask,
  getTask,
  upadateTask,
  deletetask
} = require("../controllers/taskController");


router.get("/", getTasks);
router.post("/", createTask);
router.get("/",getTask);
router.put("/",upadateTask);
router.delete("/",deletetask);

module.exports = router; 