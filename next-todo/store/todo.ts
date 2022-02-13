import { TodoType } from "../types/todo";

// action type
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

// action 생성자
export const setTodo = (payload: TodoType[]) => {
    return {
        type: INIT_TODO_LIST,
        payload,
    };
};

export const todoActions = { setTodo };

interface TodoReduxState {
    todos: TodoType[];
}

// 초기상태
const initialState: TodoReduxState = {
    todos: [],
}

//reducer
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case INIT_TODO_LIST:
            const newState = { ...state, todos: action.payload };
            return newState;
        default:
            return state;
    }
}