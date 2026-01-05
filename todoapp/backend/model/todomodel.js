import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
    }, 
    {
        timestamps: true
    }
);

const todoModel = mongoose.model("todoModel",todoSchema);
export default todoModel;