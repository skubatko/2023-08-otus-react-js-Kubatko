import React, { FC } from 'react';
import { Button } from '../Button';
import './productShortCard.css';

interface ProductShortCardProps {
  cost: number;
  img?: string;
  name: string;
  shortDescription: string;
}

export const ProductShortCard: FC<ProductShortCardProps> = ({ cost, img, name, shortDescription }) => (
  <div className="storybook-product-short-card">
    <div>{cost}</div>
    <img className="storybook-product-short-card--image" src={img} alt="image" />
    <div>{name}</div>
    <div>{shortDescription}</div>
    <Button size="large" label="Add to Basket" />
  </div>
);
