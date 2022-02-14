import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import {getTodosAPI} from "../lib/api/todo";
import { TodoType } from "../types/todo";
import todos from "./api/todos";
import { wrapper } from "../store";
import {todoActions} from "../store/todo";

const app: NextPage = () => {
  return <TodoList />;
};

export const getServerSideProps: any = wrapper.getServerSideProps(
  async ({store} : any) => {
    console.log(store);
    try{
      const {data} = await getTodosAPI();
      // store.dispatch(todoActions.setTodo(data));
      return { props: { } };
    } catch(e){
      console.log(e);
      return { props: {} };
    }
  }
);