import React, { FC } from 'react';
import { ProductItem } from 'src/components/InetShop/types';
import { Button } from '../../../stories/Button';
import './product.css';

export const Product: FC<ProductItem> = ({ id, name }) => (
  <div className="storybook-product">
    <div hidden>{id}</div>
    <div>{name}</div>
    <Button size="small" label="Delete" />
  </div>
);
