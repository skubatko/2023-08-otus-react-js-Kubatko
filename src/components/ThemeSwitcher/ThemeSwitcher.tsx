import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import cn from 'clsx';
import React, { FC } from 'react';
import { Theme, useThemeContext } from '../ThemeProvider/ThemeProvider';
import s from './ThemeSwitcher.sass';

export type ThemeSwitcherProps = {
  className?: string;
};

const icons = {
  [Theme.light]: <DarkModeIcon />,
  [Theme.dark]: <LightModeIcon />,
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={cn(s.root, className)} onClick={toggleTheme}>
      {icons[theme]}
    </button>
  );
};
