import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,  updateTodo } from "../redux/todoSlice.js";
import { useNavigate, useParams } from "react-router-dom";

const TodoSchema = Yup.object({
  title: Yup.string().required("Task title is required").min(3),
  description: Yup.string(),
  dueDate: Yup.date().required("Due date is required"),
  priority: Yup.string().required("Priority is required"),
});

const Homepage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  console.log(id);
  const isEditMode = Boolean(id);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const isExistingPost = todos.find((item) => item.id === id);

  console.log(isExistingPost);
  console.log(todos);

  return (
    <div className="p-4">
      <h1 className="text-4xl flex justify-center mt-10">Add New Task</h1>

      <div className="flex mt-6 justify-center">
        <Formik
          enableReinitialize
          initialValues={
            isExistingPost
              ? {
                  title: isExistingPost.title,
                  description: isExistingPost.description,
                  dueDate: isExistingPost.dueDate,
                  priority: isExistingPost.priority,
                }
              : { title: "", description: "", dueDate: "", priority: "" }
          }
          validationSchema={TodoSchema}
          onSubmit={(values, { resetForm }) => {
            const todo = {
              ...values,
              id: isEditMode ? id : crypto.randomUUID(),
              // completed: isExistingPost?.completed ?? false,
            };
            if (isEditMode) {
              dispatch(updateTodo(todo));
            } else {
              dispatch(addTodo(todo));
            }
            nav("/")
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg rounded-2xl shadow-lg p-6 space-y-5 bg-indigo-900 text-white"
            >
              {/* Title */}
              <input
                type="text"
                name="title"
                placeholder="Task title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                className="w-full border rounded-lg p-2"
              />
              {errors.title && touched.title && (
                <p className="text-red-400 text-sm">{errors.title}</p>
              )}

              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="w-full border rounded-lg p-2 h-24"
              />

              <div className="flex gap-4">
                <input
                  type="date"
                  name="dueDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dueDate}
                  className="border rounded-lg p-2 w-1/2"
                />
                {errors.dueDate && touched.dueDate && (
                  <p className="text-red-400 text-sm">{errors.dueDate}</p>
                )}

                <select
                  name="priority"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.priority}
                  className="border rounded-lg p-2 w-1/2"
                >
                  <option value="">Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                {errors.priority && touched.priority && (
                  <p className="text-red-400 text-sm">{errors.priority}</p>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <button type="reset" className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  Add Task
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Homepage;
