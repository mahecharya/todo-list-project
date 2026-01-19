import { createSlice } from "@reduxjs/toolkit";
import { getTodos, setTodos } from "./localStorage";
const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: getTodos() },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setTodos(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      setTodos(state.todos);
    },
    updateTodo: (state, action) => {
      const updated = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === updated.id ? updated : item,
      );
      setTodos(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      setTodos(state.todos);
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
