// File: controllers/taskcontrollers.js

exports.getTasks = (req, res) => {
    res.send("Get all tasks controllers");
};

exports.createTask = (req, res) => {
    res.send("create new task");
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
