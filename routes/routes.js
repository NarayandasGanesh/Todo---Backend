const express = require("express")
const { getAllTasks, addTasks, editTasks, deleteTasks } = require("../Controller/TasksData")

const TaskRouter = express.Router()

TaskRouter.get("/tasks", getAllTasks)
TaskRouter.post("/add", addTasks)
TaskRouter.patch("/edit/:id", editTasks)
TaskRouter.delete("/delete/:id", deleteTasks)

module.exports = {
    TaskRouter
}