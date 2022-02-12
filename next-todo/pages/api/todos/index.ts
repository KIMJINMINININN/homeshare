import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const todos = Data.todo.getList();
            const changedTodos = todos.map((todo) => {
                if(todo.id === todoId){
                    return {...todo, checked: !todo.checked};
                }
                return todo;
            });
            Data.todo.write(changedTodos);
            res.statusCode = 200;
            return res.send(todos);
        } catch (e) {
            console.log(e);
            res.statusCode = 500;
            res.send(e);
        }
    }
    if (req.method === "POST"){
        const {text, color} = req.body;
        if(!text || !color){
            res.statusCode = 400;
            return res.send("text 혹은 color 가 없습니다.");
        }

        const todos = Data.todo.getList();
        let todoId: number;
        if(todos.length > 0){
            todoId = todos[todos.length - 1].id +  1;
        }else{
            todoId = 1;
        }

        const newTodo = {
            id: todoId,
            text,
            color,
            checked: false,
        };

        Data.todo.write([...todos, newTodo]);
        res.statusCode = 200;
        res.end();
    }
    if(req.method === "DELETE"){
        try{
            const todoId = Number(req.query.id);
            const todo = Data.todo.exist({id : todoId});
            if(!todo){
                res.statusCode = 404;
                res.end();
            }
    
            const todos = Data.todo.getList();
            const filteredTodos = todos.filter((todo) => todo.id !== todoId);
            Data.todo.write(filteredTodos);
            res.statusCode = 200;
            res.end();
        } catch(e){
            console.log(e);
            res.statusCode = 500;
            res.send(e);
        }
    }
}