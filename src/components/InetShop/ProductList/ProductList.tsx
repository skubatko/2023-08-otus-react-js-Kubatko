import React, { FC } from 'react';
import { List } from '../../List/List';
import { Product } from '../Product/Product';
import './productList.css';

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => (
  <div className="storybook-product-list-card">
    <List items={products} />
  </div>
);
