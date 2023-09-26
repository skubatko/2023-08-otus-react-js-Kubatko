import React from 'react';
import './logo.css';
import logo from './logo.svg';

export function Logo() {
  return (
    <a href="/">
      <img className={'storybook-logo'} src={logo} alt="logo" />
    </a>
  );
}
