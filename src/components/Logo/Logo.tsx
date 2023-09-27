import React from 'react';
import './logo.css';
import logo from './logo.svg';

export const Logo: React.FC = () => {
  return (
    <a href="/">
      <img className={'storybook-logo'} src={logo} alt="logo" />
    </a>
  );
};
