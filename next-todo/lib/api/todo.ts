import axios from ".";
import {TodoType} from "../../types/todo";

interface AddTodoAPIBody{
    text: string;
    color: TodoType["color"];
}

//todo 가져오는 api
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");
//있는 id인지 
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
//투두 추가 api
export const addTodoAPI = (body: AddTodoAPIBody) => axios.post("/api/todos", body);
//투두 삭제 api
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);