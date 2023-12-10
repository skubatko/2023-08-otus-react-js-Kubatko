import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasketScreen from 'src/screens/BasketScreen';
import HomeScreen from 'src/screens/HomeScreen';
import NotFoundScreen from 'src/screens/NotFoundScreen';
import ProductScreen from 'src/screens/ProductScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

export const Navigation: FC = () => (
  <Routes>
    <Route index element={<HomeScreen />} />
    <Route path="profile" element={<ProfileScreen />} />
    <Route path="products" element={<ProductScreen />} />
    <Route path="basket" element={<BasketScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Routes>
);
