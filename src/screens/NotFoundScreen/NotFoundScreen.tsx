import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { Page } from 'src/components/Page';
import s from './NotFoundScreen.sass';

export const NotFoundScreen: FC = () => (
  <Page title="Не найдено" className={s.root}>
    <Frame>Страница не найдена</Frame>
  </Page>
);

export default NotFoundScreen;
