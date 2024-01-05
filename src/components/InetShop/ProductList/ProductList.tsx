import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductItem } from 'src/components/InetShop/types';
import { basketActions } from 'src/store/basket';
import { Button } from 'src/stories/Button';
import { getRandomId } from '../../../utils/random';
import { List } from '../../List/List';
import { ListItem } from '../../List/ListItem/ListItem';
import './productList.css';

interface ProductListProps {
  initialProducts?: ProductItem[];
}

export const ProductList: FC<ProductListProps> = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const dispatch = useDispatch();
  const handleShowMoreProduct = () => {
    setProducts([...products, { id: getRandomId(), name: 'randomProduct' } as ProductItem]);
  };
  const addToBasket = (product: ProductItem) => dispatch(basketActions.add(product));

  return (
    <div className="storybook-product-list">
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            {product.name}
            <Button label="В корзину" onClick={() => addToBasket(product)} />
          </ListItem>
        ))}
      </List>
      <button type="button" onClick={handleShowMoreProduct}>
        Показать еще
      </button>
    </div>
  );
};
