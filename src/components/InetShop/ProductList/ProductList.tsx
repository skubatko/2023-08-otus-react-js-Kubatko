import React, { FC, useState } from 'react';
import { getRandomId } from '../../../utils/random';
import { List } from '../../List/List';
import { ListItem } from '../../List/ListItem/ListItem';
import { ProductProps } from '../Product/Product';
import './productList.css';

interface ProductListProps {
  initialProducts?: ProductProps[];
}

export const ProductList: FC<ProductListProps> = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const handleShowMoreProduct = () => {
    setProducts([...products, { id: getRandomId(), name: 'randomProduct' } as ProductProps]);
  };

  return (
    <div className="storybook-product-list">
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>{product.name}</ListItem>
        ))}
      </List>
      <button onClick={handleShowMoreProduct}>Показать еще</button>
    </div>
  );
};
