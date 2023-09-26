import React from 'react';
import { Button } from '../Button';
import './basket.css';

interface BasketProps {
  counter: number;
}

export function Basket({ counter = 0, ...props }: BasketProps) {
  if (counter === 0) return <Button size="small" label="Add" />;

  return (
    <div className="storybook-basket">
      <label className="storybook-basket--label">
        <input className="storybook-basket--input" name="counter" type="number" value={counter} />
      </label>
      <Button size="small" label="+" />
      <Button size="small" label="-" />
    </div>
  );
}
