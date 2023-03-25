import { useTheme } from 'hook/useTheme';
import React from 'react';

import './BackgroundImage.scss';

export const BackgroundImage = () => {
  const theme = useTheme();

  return <div className={`BackgroundImage ${theme}`}></div>;
};
