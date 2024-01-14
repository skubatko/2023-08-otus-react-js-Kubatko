import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Frame } from 'src/components/Frame';
import { BasketList } from 'src/components/InetShop/BasketList';
import { Page } from 'src/components/Page';
import { basketSelectors } from 'src/store/basket';
import s from './BasketScreen.sass';

export const BasketScreen: FC = () => {
  const basket = useSelector(basketSelectors.get);

  return (
    <Page title="Корзина" className={s.root}>
      <Frame>
        <BasketList initialProducts={basket} />
      </Frame>
    </Page>
  );
};

export default BasketScreen;
