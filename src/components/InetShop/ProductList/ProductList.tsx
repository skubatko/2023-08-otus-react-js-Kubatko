import React, { FC, useState } from 'react';
import { getRandomId } from '../../../utils/random';
import { List } from '../../List/List';
import { ListItem } from '../../List/ListItem/ListItem';
import { Product } from '../Product/Product';
import './productList.css';

interface ProductListProps {
  initialProducts: Product[];
}

export const ProductList: FC<ProductListProps> = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const handleShowMoreProduct = () => {
    setProducts([...products, { id: getRandomId(), name: 'randomProduct' }]);
  };

  return (
    <div className="storybook-product-list">
      <button onClick={handleShowMoreProduct}>Показать еще</button>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>{product.name}</ListItem>
        ))}
      </List>
    </div>
  );
};
