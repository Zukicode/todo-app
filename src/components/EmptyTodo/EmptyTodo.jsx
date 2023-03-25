import React from 'react';

//Style
import './EmptyTodo.scss';

//Image
import emptyImage from 'images/empty.png';

//Theme
import { useTheme } from 'hook/useTheme';

export const EmptyTodo = () => {
  const theme = useTheme();

  return (
    <div className={`EmptyTodo ${theme}`}>
      <img src={emptyImage} alt="empty" width="150px" />
      <div>
        <h1>You have no tasks!</h1>
        <p>Schedule your business here and achieve your goals!</p>
      </div>
    </div>
  );
};
