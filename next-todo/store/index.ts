// import { createWrapper, HYDRATE } from "next-redux-wrapper";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import todo from "./todo";

// const rootReducer = combineReducers({
//     todo,
// })

// const reducer = (state: any, action: any) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state,
//             ...action.payload,
//         }
//         return nextState;
//     }
//     return rootReducer(state, action);
// };

// //store의 타입
// export type RootState = ReturnType<typeof rootReducer>;
// //미들웨어 적용 위한 스토어
// const bindMiddleware = (middleware: any) => {
//     if (process.env.NODE_ENV !== "production") {
//         const { composeWithDevTools } = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

// const initStore = () => {
//     return createStore(reducer, bindMiddleware([]));
// };

// export const wrapper = createWrapper(initStore)

import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const rootReducer = combineReducers({
    todo: todo.reducer,
})

const reducer = (state: any, action:any) => {
    if (action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true,
    });
};

export const wrapper = createWrapper(initStore);