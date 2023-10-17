import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react';
import { Theme, useThemeContext } from '../ThemeProvider/ThemeProvider';
import './themeSwitcher.css';

const icons = {
  [Theme.light]: <DarkModeIcon />,
  [Theme.dark]: <LightModeIcon />,
};

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={'storybook-theme-switcher'} onClick={toggleTheme}>
      theme: {icons[theme]}
    </button>
  );
};
