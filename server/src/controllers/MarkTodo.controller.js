import { StatusCode } from "../utils/constant.js"
import { jsonGenerate } from "../utils/helpers.js"
import Todo from "../models/Todo.js";
import { validationResult } from "express-validator";
export const MarkTodo=async (req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty()) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERR,"todo-id is required",error.mapped()));

    }
    try{
        const todo=await Todo.findOneAndUpdate({
            _id:req.body.todo_id,


        },[
            {
                $set: {
                    isCompleted:{
                    $eq:[false,"$isCompleted"]
            }
        
        }
    }
    ]);
    if(todo)
    {
        return(res.json(jsonGenerate(StatusCode.SUCCESS,"updated",todo)))
    }

}
    catch(error){
        res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"counld not update",null));

    }
}