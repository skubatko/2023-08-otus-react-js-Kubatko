import React from 'react';
import './listItem.css';

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => <li className="storybook-list-item">{children}</li>;
