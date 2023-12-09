import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import s from './HomeScreen.sass';

export const HomeScreen: FC = () => (
  <div className={s.root}>
    <Frame>Home</Frame>
  </div>
);

export default HomeScreen;
