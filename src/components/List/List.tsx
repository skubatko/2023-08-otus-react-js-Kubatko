import React from 'react';
import { getRandomId } from '../../utils/random';
import './list.css';
import { ListItem } from './ListItem/ListItem';

interface ListProps {
  items: React.ReactNode[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className={'storybook-list'}>
      {items.map((item) => (
        <ListItem key={getRandomId()}>{item}</ListItem>
      ))}
    </div>
  );
};
