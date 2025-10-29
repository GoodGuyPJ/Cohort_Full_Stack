const express = require("express");
const router = new express.Router();

const { getAllTasks, createTask, deleteTask, updateTask } = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

// router.route('/').get((req, res) => {
//   res.send('GET all tasks');
// })
// .post((req, res) => {
//   res.send('Create a new task');
// });

module.exports = router;