const todoModel = require("../model/todomodel");

 async function createTodo (req,res){
    try{
        const {title, completed,} = req.body;
        if(!title){
            return res.status(400).json({
                message: "there is no title"
            });
        }

        const newTodo = await todoModel.create({
            title, completed
        });

        return res.status(201).json(newTodo);
   
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getAllTodos (req,res){
    try{
        const todos = await todoModel.find();
        return res.status(200).json(todos);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getTodoById (req,res){
    try{
        const id = req.params.id;
        const todo = await todoModel.findById(id);
        
        if(!todo){
            return res.status(404).json({
                message: "Todo not found"
            });
        }
        
        return res.status(200).json(todo);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}


async function deleteTodo (req,res){
    try{
        const id = req.params.id;
        const deletedTodo = await todoModel.findByIdAndDelete(id);
        
        if(!deletedTodo){
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            message: "Successfully deleted",
            todo: deletedTodo
        });
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

 async function updateTodo(req,res){
    try{
        const id = req.params.id;
        const {title,completed} = req.body;
        
        const updatedTodo = await todoModel.findByIdAndUpdate(id,{
            title, completed}, { new: true }
        );

        if(!updatedTodo){
            return res.status(404).json({
                message: "Todo not found"
            });
        }
        
        return res.status(200).json(updatedTodo);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { updateTodo, getAllTodos, getTodoById, createTodo, deleteTodo}