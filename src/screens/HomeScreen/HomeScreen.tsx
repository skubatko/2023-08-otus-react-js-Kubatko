import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { Page } from 'src/components/Page';
import s from './HomeScreen.sass';

export const HomeScreen: FC = () => (
  <Page title="Главная" className={s.root}>
    <Frame>Интернет-магазин</Frame>
  </Page>
);

export default HomeScreen;
