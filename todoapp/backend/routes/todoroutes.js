const { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } = require('../controllers/todocontroller')

const express = require('express')

const router = express.Router()

router.post("/todos", createTodo)

router.get("/todos", getAllTodos)

router.get("/todos/:id", getTodoById)

router.put("/todos/:id", updateTodo)

router.delete("/todos/:id", deleteTodo)

module.exports = router