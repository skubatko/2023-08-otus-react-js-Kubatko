import React, { FC } from 'react';
import { Header } from '../components/Header';
import s from './Layout.sass';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={s.root}>
    <Header className={s.header} />
    {children}
  </div>
);
