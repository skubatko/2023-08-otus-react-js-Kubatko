import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="storybook-header">
        <ThemeSwitcher />,
      </div>
    </header>
  );
};
