import React, { FC } from 'react';
import { Button } from '../../../stories/Button';
import './product.css';

export const Product: FC = () => (
  <div className="storybook-product">
    <Button size="small" label="Delete" />
  </div>
);
