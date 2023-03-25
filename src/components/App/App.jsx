import React, { useEffect } from 'react';

//Style
import './App.scss';

//Components
import { Todo } from 'components/Todo/Todo';
import { BackgroundImage } from 'components/BackgroundImage/BackgroundImage';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from 'features/todo/todoSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('todo')) {
      dispatch(setTodo(JSON.parse(localStorage.getItem('todo'))));
    }
  }, []);

  return (
    <div className="App">
      <Todo />
      <BackgroundImage />
    </div>
  );
};
