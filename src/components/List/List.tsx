import React from 'react';
import './list.css';

interface ListProps {
  children: React.ReactNode[];
}

export const List: React.FC<ListProps> = ({ children }) => <ul className="storybook-list">{children}</ul>;
