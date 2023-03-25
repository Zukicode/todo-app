import { clearCompletedTask } from 'features/todo/todoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notCompleted } from 'utils/utils';

//Styles
import './MobileClear.scss';

export const MobileClear = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);

  const itemsLeft = notCompleted(todo);

  const clearCompleted = () => {
    dispatch(clearCompletedTask());
  };

  if (todo.length === 0) return;

  return (
    <div className="mobileClear">
      <div className="countTaskMobile">
        <p>{itemsLeft.length} items left</p>
      </div>

      <div onClick={clearCompleted} className="clearTaskMobile">
        <p>Clear Completed</p>
      </div>
    </div>
  );
};
