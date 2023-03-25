import React, { useEffect, useState } from 'react';

//Styles
import './TodoList.scss';

//Components
import { TodoItem } from 'components/TodoItem/TodoItem';
import { MobileClear } from 'components/MobileClear/MobileClear';
import { Filter } from 'components/Filter/Filter';
import { EmptyTodo } from 'components/EmptyTodo/EmptyTodo';

//Theme
import { useTheme } from 'hook/useTheme';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTodo, setCompletedTodo } from 'features/todo/todoSlice';

export const TodoList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { todo, activeTodo, completedTodo } = useSelector((state) => state.todo);

  const [activeArrayTodo, setActiveArrayTodo] = useState(todo);
  const [activeTodoId, setActiveTodoId] = useState(1);

  useEffect(() => {
    switch (activeTodoId) {
      case 1:
        setActiveArrayTodo(todo);
        break;
      case 2:
        setActiveArrayTodo(activeTodo);
        break;
      default:
        setActiveArrayTodo(completedTodo);
        break;
    }

    dispatch(setCompletedTodo(todo.filter((task) => task.isActive === false)));
    dispatch(setActiveTodo(todo.filter((task) => task.isActive === true)));
  }, [todo, dispatch, activeTodoId]);

  return (
    <>
      <div className={`todoList ${theme}`}>
        {todo.length ? (
          activeArrayTodo.map((task) => <TodoItem key={task.id} {...task} />)
        ) : (
          <EmptyTodo />
        )}

        <div className="mobileShow">
          <Filter activeTodoId={activeTodoId} setActiveTodoId={setActiveTodoId} />
        </div>
        <MobileClear />
      </div>
      <div className="mobileHide">
        <Filter activeTodoId={activeTodoId} setActiveTodoId={setActiveTodoId} />
      </div>
    </>
  );
};
