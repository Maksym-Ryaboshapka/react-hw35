import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const res = await axios.post(API_URL, { id: uuid(), text, isDone: false });
  return res.data;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {
  const res = await axios.put(`${ API_URL }/${ todo.id }`, { ...todo, isDone: !todo.isDone });
  return res.data;
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await axios.delete(`${ API_URL }/${ id }`);
  return id;
});