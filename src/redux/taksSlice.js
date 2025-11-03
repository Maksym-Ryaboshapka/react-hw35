import { createSlice } from "@reduxjs/toolkit";
import { getTodos, addTodo, toggleTodo, removeTodo } from "./task/thunk";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getTodos.pending, (state) => {
          state.loading = true;
        })
        .addCase(getTodos.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })

        .addCase(addTodo.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })

        .addCase(toggleTodo.fulfilled, (state, action) => {
          const idx = state.items.findIndex(t => t.id === action.payload.id);
          if (idx !== -1) state.items[idx] = action.payload;
        })

        .addCase(removeTodo.fulfilled, (state, action) => {
          state.items = state.items.filter(t => t.id !== action.payload);
        });
  }
});

export default tasksSlice.reducer;