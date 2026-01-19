import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";

const Alltask = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center mb-6">All Tasks</h1>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-black p-4 rounded-lg shadow mb-3 flex justify-between items-center"
        >
          <div>
            <h3
              className={`${todo.completed ? "line-through text-gray-400" : "font-semibold"}`}
            >
              {todo.title} ({todo.priority})
            </h3>
            <p className="text-sm">{todo.description}</p>
            <p className="text-xs text-gray-500">Due: {todo.dueDate}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="px-2 py-1 bg-green-500 text-white rounded"
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/all/${todo.id}`)}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alltask;
