import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface CreateProps {
  addTodo: (newTask: string) => void;
}

const Create: React.FC<CreateProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');
  
  const handleAdd = (): void => {
    axios.post('http://localhost:3001/add', { task })
      .then((result: AxiosResponse) => {
        console.log(result);
        addTodo(task); 
        setTask(''); 
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  return (
    <div className=" max-width-xl items-center space-y-4">
      <div className="flex items-center">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          onClick={handleAdd}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Create;
