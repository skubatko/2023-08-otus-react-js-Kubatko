import React, { FC } from 'react';
import { Button } from '../../../stories/Button';
import './product.css';

export interface ProductProps {
  id: string;
  name: string;
}

export const Product: FC<ProductProps> = ({ id, name }) => (
  <div className="storybook-product">
    <div hidden>{id}</div>
    <div>{name}</div>
    <Button size="small" label="Delete" />
  </div>
);
