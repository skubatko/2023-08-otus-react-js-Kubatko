import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProtectedRoute } from './ProtectedRoute';

export const Navigation: FC = () => (
  <Routes>
    {/*<Route index element={homeScreen} />*/}
    {/*<Route path="teachers" element={teachersScreen} />*/}
    {/*<Route path="examples/*" element={examplesScreen}>*/}
    {/*  <Route path=":mode" element={examplesScreen} />*/}
    {/*</Route>*/}
    {/*<Route path="lessons/*" element={lessonsScreen}>*/}
    {/*  <Route path=":mode" element={lessonsScreen} />*/}
    {/*</Route>*/}
    {/*<Route path="auth/*" element={authScreen}>*/}
    {/*  <Route path=":mode" element={authScreen} />*/}
    {/*</Route>*/}
    <Route path="profile" element={<ProtectedRoute>{ProfileScreen}</ProtectedRoute>} />
    {/*<Route path="home-works" element={homeWorksScreen} />*/}
    {/*<Route path="*" element={notFoundScreen} />*/}
  </Routes>
);
