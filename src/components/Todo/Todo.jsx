import React from 'react';

//Style
import './Todo.scss';

//Theme
import { useTheme } from 'hook/useTheme';

//Components
import { CreateTodo } from 'components/CreateTodo/CreateTodo';
import { Header } from 'components/Header/Header';
import { TodoList } from 'components/TodoList/TodoList';

export const Todo = () => {
  const theme = useTheme();

  return (
    <div className={`Todo ${theme}`}>
      <Header />
      <CreateTodo />
      <TodoList />
      <p className="createdBy">
        Created by{' '}
        <a href="https://github.com/Zukicode" target="_blank" rel="noreferrer">
          zukciode
        </a>{' '}
      </p>
    </div>
  );
};
