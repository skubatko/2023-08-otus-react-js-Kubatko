import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { ProductList } from 'src/components/InetShop/ProductList/ProductList';
import { Page } from 'src/components/Page';
import s from './ProductScreen.sass';

export const ProductScreen: FC = () => (
  <Page title="Товары" className={s.root}>
    <Frame>
      <ProductList />
    </Frame>
  </Page>
);

export default ProductScreen;
