import React from 'react';

//Styles
import './TodoItem.scss';

//Theme
import { useTheme } from 'hook/useTheme';

//Icon
import deleteIcon from 'images/icon-cross.svg';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'features/todo/todoSlice';

export const TodoItem = ({ id, task, isActive }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`todoItem ${theme}`}>
      <div className="todoItem-task">
        <div className="todoItem-checkBox">
          <Checkbox id={id} isActive={isActive} />
        </div>
        <p className={!isActive ? 'active' : ''}>{task}</p>
      </div>

      <div className="todoItem-delete">
        <button onClick={removeTodo}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};
