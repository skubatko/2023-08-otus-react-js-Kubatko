import React from 'react';
import { Logo } from '../Logo/Logo';
import './header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="storybook-header">
        <Logo />
      </div>
    </header>
  );
};
