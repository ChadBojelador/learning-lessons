import todoModel from "../model/todomodel.js";

export const createTodo = async(req,res)=>{
    try{
        const {title, completed,} = req.body;
        if(!title){
            res.status(400).json({
                message: "there is no title"
            }) }

        else{
            const newTodo = await todoModel.create({
                title, completed
                    })

        res.status(201).json(newTodo)
        }
   
   
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const getTodo = async(req,res)=>{
    try{
         const todos = await todoModel.find();
        if(todos.length === 0){
        res.status(500).json({
            message: "NO DATA"
        })
    }
    else{
        res.status(200).json(todos)
    }}
    catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}


export const deleteTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).json({
                message: "there is no existing todo"
            })
        }

        else{
            const deleteTodo = await todoModel.findByIdAndDelete(id)
            res.status(200).json({
                message: `Successfully deleted ${deleteTodo}`
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateTodo = async(req,res) =>{
    try{
        const id = req.params.id
        const {title,completed} = req.body
        
        const updatedTodo = await todoModel.findByIdAndUpdate(id,{
            title, completed}, { new: true }
        )

        if(!updatedTodo){
            res.status(404).json({
                message: "There is no updated todo"
            })
        }
        else{
            res.status(200).json(updatedTodo)
        }
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}