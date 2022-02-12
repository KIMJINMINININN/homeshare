import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

// 투두리스트 데이터 불러오기
const getList = () => {
    const todosBuffer = readFileSync("data/todos.json");
    const todosString = todosBuffer.toString();
    if(!todosString){
        return [];
    }
    const todos: TodoType[] = JSON.parse(todosString);
    return todos;
};

// id가 있으면 true 리턴 id가 없으면 false 리턴
const exist = ({ id } : { id : number }) => {
    const todos = getList();
    const todo = todos.some((todo) => todo.id === id);
    return todo;
}

// 투두리스트 저장하기(데이터 변경함수)
const write = async (todos: TodoType[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
};

export default {getList, exist, write};