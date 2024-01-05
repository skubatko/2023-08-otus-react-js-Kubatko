import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'src/navigation/ProtectedRoute';
import AuthScreen from 'src/screens/AuthScreen';
import BasketScreen from 'src/screens/BasketScreen';
import HomeScreen from 'src/screens/HomeScreen';
import NotFoundScreen from 'src/screens/NotFoundScreen';
import ProductScreen from 'src/screens/ProductScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

export const Navigation: FC = () => (
  <Routes>
    <Route index element={<HomeScreen />} />
    <Route
      path="profile"
      element={
        <ProtectedRoute>
          <ProfileScreen />
        </ProtectedRoute>
      }
    />
    <Route
      path="products"
      element={
        <ProtectedRoute>
          <ProductScreen />
        </ProtectedRoute>
      }
    />
    <Route
      path="basket"
      element={
        <ProtectedRoute>
          <BasketScreen />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFoundScreen />} />
    <Route path="auth/*" element={<AuthScreen />}>
      <Route path=":mode" element={<AuthScreen />} />
    </Route>
  </Routes>
);
