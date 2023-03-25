import React from 'react';

//Style
import './Header.scss';

//Icon
import iconMoon from 'images/icon-moon.svg';
import iconSun from 'images/icon-sun.svg';

//Redux
import { useTheme } from 'hook/useTheme';
import { useDispatch } from 'react-redux';
import { changeTheme } from 'features/theme/themeSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleTheme = () => dispatch(changeTheme());

  return (
    <div className="header">
      <h1 className="header-logo">TODO</h1>
      <div className="header-changeTheme">
        <button onClick={handleTheme}>
          <img src={theme === 'dark' ? iconSun : iconMoon} alt="icon-theme" />
        </button>
      </div>
    </div>
  );
};
