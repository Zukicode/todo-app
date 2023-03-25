import React, { useState } from 'react';

//Style
import './CreateTodo.scss';

//Theme
import { useTheme } from 'hook/useTheme';

//Redux
import { addTodo } from 'features/todo/todoSlice';
import { useDispatch } from 'react-redux';

export const CreateTodo = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [taskValue, setTaskValue] = useState('');

  const onChangeValue = (e) => setTaskValue(e.target.value);

  const createTodo = (e) => {
    if (taskValue === '') return;

    if (e.key === 'Enter') {
      const newTodo = {
        id: Math.random(),
        task: taskValue,
        isActive: true,
      };

      dispatch(addTodo(newTodo));

      setTaskValue('');
    }
  };

  return (
    <div className={`createTodo ${theme}`}>
      <div className={`createTodo-checkbox ${theme}`}>
        <div></div>
      </div>
      <input
        type="text"
        value={taskValue}
        onChange={onChangeValue}
        onKeyDown={createTodo}
        placeholder="Create a new todo..."
      />
    </div>
  );
};
