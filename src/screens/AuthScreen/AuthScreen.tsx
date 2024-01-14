import React, { FC, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { StyledLink } from 'src/components/StyledLink';
import { Title } from 'src/components/Title';
import { SingInBlock } from 'src/screens/AuthScreen/SingInBlock';
import { SingUpBlock } from 'src/screens/AuthScreen/SingUpBlock';
import s from './AuthScreen.sass';

export enum AuthMode {
  signIn = 'signin',
  signUp = 'signup',
}

export const AuthScreen: FC = () => {
  const location = useLocation();

  const path = useMemo(() => location.pathname.split('/').slice(0, -1).join('/'), [location.pathname]);

  const signInElement = (
    <>
      <div className={s.top}>
        <Title className={s.title}>Войти</Title>
        <StyledLink to={`${path}/${AuthMode.signUp}`}>Зарегистрироваться</StyledLink>
      </div>
      <SingInBlock />
    </>
  );

  const signUpElement = (
    <>
      <div className={s.top}>
        <Title className={s.title}>Зарегистрироваться</Title>
        <StyledLink to={`${path}/${AuthMode.signIn}`}>Войти</StyledLink>
      </div>
      <SingUpBlock />
    </>
  );

  return (
    <div className={s.root}>
      <div className={s.frame}>
        <Routes>
          <Route index element={<Navigate to={AuthMode.signIn} state={location.state} replace />} />
          <Route path={AuthMode.signIn} element={signInElement} />
          <Route path={AuthMode.signUp} element={signUpElement} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthScreen;
