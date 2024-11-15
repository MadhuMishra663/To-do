import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<{ _id: string; task: string; __v: number; completed: boolean }[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (_id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== _id));
  };

  const handleToggleComplete = (_id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === _id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (newTask: string) => {
    setTodos((prevTodos) => [...prevTodos, { _id: Date.now().toString(), task: newTask, __v: 0, completed: false }]);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center">
          To-Do List
        </h2>
        <Create addTodo={addTodo} />
        {todos.length === 0 ? (
          <div>
            <h2 className="text-gray-500">No Records</h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              className="flex items-center p-2 border border-gray-200 rounded-md text-center mt-2 space-x-2"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo._id)}
              />
              <span className={`flex-1 text-left ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.task}
              </span>
              <button onClick={() => handleDelete(todo._id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
