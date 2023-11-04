import React, { FC } from 'react';
import { Button } from '../../../stories/Button';
import './productCard.css';

interface ProductCardProps {
  cost: number;
  img?: string;
  category: string;
  name: string;
  description: string;
}

export const ProductCard: FC<ProductCardProps> = ({ cost, img, category, name, description }) => (
  <div className="storybook-product-card">
    <div>{cost}</div>
    <img className="storybook-product-card--image" src={img} alt="image" />
    <div>{category}</div>
    <div>{name}</div>
    <div>{description}</div>
    <Button size="large" label="Add to Basket" />
  </div>
);
