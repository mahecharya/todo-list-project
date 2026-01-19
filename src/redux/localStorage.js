

export const setTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};
