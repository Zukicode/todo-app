import React, { useState } from 'react';

//Styles
import './Checkbox.scss';

//Icon
import checkIcon from 'images/icon-check.svg';
import { useTheme } from 'hook/useTheme';
import { useDispatch } from 'react-redux';
import { setCompletedTask } from 'features/todo/todoSlice';

export const Checkbox = ({ id, isActive }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [active, setActive] = useState(isActive);

  const handleActive = () => {
    setActive(!active);
    dispatch(setCompletedTask(id));
  };

  return (
    <div
      onClick={handleActive}
      className={!active ? `checkbox ${theme} active` : `checkbox ${theme}`}>
      {!active && <img src={checkIcon} alt="check" />}
    </div>
  );
};
