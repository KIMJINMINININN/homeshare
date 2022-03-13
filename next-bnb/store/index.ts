import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
} from "react-redux";
import user from "./user";
import common from './common';
import auth from "./auth";

const rootReducer = combineReducers({
    user: user.reducer,
    common: common.reducer,
    auth: auth.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        if (state === initialRootState) {
            return {
                ...state,
                ...action.payload,
            };
        }
        return state;
    }
    return rootReducer(state, action);
};

//타입 지원 되는 커스텀 userSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => createStore(
    reducer,
    initialRootState,
)

export const wrapper = createWrapper(initStore);