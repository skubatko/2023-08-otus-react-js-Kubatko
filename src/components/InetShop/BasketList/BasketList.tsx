import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductItem } from 'src/components/InetShop/types';
import { basketActions } from 'src/store/basket';
import { Button } from 'src/stories/Button';
import { List } from '../../List/List';
import { ListItem } from '../../List/ListItem/ListItem';
import './basketList.css';

interface BasketListProps {
  initialProducts?: ProductItem[];
}

export const BasketList: FC<BasketListProps> = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const dispatch = useDispatch();
  const removeFromBasket = (productId: string) => {
    dispatch(basketActions.remove({ productId }));
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <div className="storybook-product-list">
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            {product.name}
            <Button label="Удалить" onClick={() => removeFromBasket(product.id)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
