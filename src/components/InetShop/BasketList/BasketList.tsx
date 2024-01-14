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
  const remove = (idx: number) => {
    dispatch(basketActions.remove({ idx }));
    setProducts(products.filter((p, i) => i !== idx));
  };

  return (
    <div className="storybook-product-list">
      <List>
        {products.map((product, idx) => (
          <ListItem key={idx}>
            {product.name}
            <Button label="Удалить" onClick={() => remove(idx)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
