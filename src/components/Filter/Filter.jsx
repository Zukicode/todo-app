import React from 'react';

//Theme
import { useTheme } from 'hook/useTheme';

//Styles
import './Filter.scss';

//Utils
import { notCompleted } from 'utils/utils';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTask } from 'features/todo/todoSlice';

export const Filter = ({ activeTodoId, setActiveTodoId }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { filter, todo } = useSelector((state) => state.todo);

  const itemsLeft = notCompleted(todo);

  const changeFilter = (id) => setActiveTodoId(id);

  const clearCompleted = () => {
    dispatch(clearCompletedTask());
  };

  if (todo.length === 0) return;

  return (
    <div className={`filter ${theme}`}>
      <div className="countTask">
        <p>{itemsLeft.length && itemsLeft.length} items left</p>
      </div>

      <div className="filterChange">
        {filter.map(({ id, text }) => (
          <button
            key={id}
            onClick={() => changeFilter(id)}
            className={activeTodoId === id ? 'active' : ''}>
            {text}
          </button>
        ))}
      </div>

      <div onClick={clearCompleted} className="clearTask">
        <p>Clear Completed</p>
      </div>
    </div>
  );
};
