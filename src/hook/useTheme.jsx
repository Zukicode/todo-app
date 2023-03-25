import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useTheme = () => {
  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isDark === true) {
      document.querySelector('body').style.background = 'hsl(235, 21%, 11%)';
    } else {
      document.querySelector('body').style.background = 'hsl(236, 33%, 92%)';
    }
  }, [isDark]);

  return isDark ? 'dark' : 'light';
};
