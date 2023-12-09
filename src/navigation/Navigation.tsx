import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from 'src/screens/HomeScreen';
import NotFoundScreen from 'src/screens/NotFoundScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

export const Navigation: FC = () => (
  <Routes>
    <Route index element={<HomeScreen />} />
    <Route path="profile" element={<ProfileScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Routes>
);
