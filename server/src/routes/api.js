import express from "express"
import Login from "../controllers/Login.controller.js";
import Register from "../controllers/Register.controller.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import {createTodo} from  "../controllers/Todo.controller.js";  
import {check} from "express-validator"
import { GetTodos } from "../controllers/TodoList.controller.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import { MarkTodo } from "../controllers/MarkTodo.controller.js";
import {RemoveTodo} from "../controllers/RemoveTodo.controller.js"
 const apiRoute=express.Router();
export const apiProtected=express.Router();

apiProtected.post(
  "/createTodo",
  [check("desc", "Todo desc is required").exists()],
  createTodo
);
apiProtected.post(
  "/deletetodo",
  [check("todo_id", "Todo id is required").exists()],
  RemoveTodo
);
apiProtected.post(
  "/marktodo",
  [check("todo_id", "Todo id is required").exists()],
  MarkTodo
);
apiProtected.get(
  "/todolist",
   GetTodos
);

apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);

// protected routes;




export default apiRoute;