import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todocontroller';

const express = require('express')

const router = express.Router()

router.post("/todos", createTodo)

router.get("todos/:id", getTodo)

router.put("todos/:id", updateTodo)

router.delete("todos/:id", deleteTodo)

export default router;