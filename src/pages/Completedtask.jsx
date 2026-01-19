import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const Completedtask = () => {
  const dispatch = useDispatch();

  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.completed)
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center mb-6">Completed Tasks</h1>

      {completedTodos.length === 0 && (
        <p className="text-center text-gray-500">
          No completed tasks yet.
        </p>
      )}

      {completedTodos.map((todo) => (
        <div
          key={todo.id}
          className="bg-black p-4 rounded-lg shadow mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="line-through text-gray-400 font-semibold">
              {todo.title} ({todo.priority})
            </h3>
            <p className="text-sm">{todo.description}</p>
            <p className="text-xs text-gray-500">Due: {todo.dueDate}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="px-2 py-1 bg-yellow-500 text-white rounded"
            >
              Undo
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Completedtask;
