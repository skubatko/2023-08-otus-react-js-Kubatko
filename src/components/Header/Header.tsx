import cn from 'clsx';
import React, { memo, useMemo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Frame } from 'src/components/Frame';
import { Login } from 'src/components/Login';
import { Logo } from 'src/components/Logo';
import { ResponseNavigation, ResponseNavigationProps } from 'src/components/ResponseNavigation';
import { ThemeSwitcher } from 'src/components/ThemeSwitcher';
import s from './Header.sass';

export type HeaderOriginProps = {
  className?: string;
};

const horClassName: NavLinkProps['className'] = ({ isActive }) => cn(s.horizontalLink, isActive && s.active);
const verClassName: NavLinkProps['className'] = ({ isActive }) => cn(s.verticalLink, isActive && s.active);

export const Header = memo<HeaderOriginProps>(({ className }) => {
  const { left, right } = useMemo<Pick<ResponseNavigationProps, 'left' | 'right'>>(
    () => ({
      left: [
        {
          key: '/',
          horizontalElem: (
            <NavLink className={horClassName} to="/">
              Главная
            </NavLink>
          ),
          verticalElem: (
            <NavLink className={verClassName} to="/">
              Главная
            </NavLink>
          ),
        },
        {
          key: '/profile',
          horizontalElem: (
            <NavLink className={horClassName} to="/profile">
              Профиль
            </NavLink>
          ),
          verticalElem: (
            <NavLink className={verClassName} to="/profile">
              Профиль
            </NavLink>
          ),
        },
        {
          key: '/products',
          horizontalElem: (
            <NavLink className={horClassName} to="/products">
              Товары
            </NavLink>
          ),
          verticalElem: (
            <NavLink className={verClassName} to="/products">
              Товары
            </NavLink>
          ),
        },
      ],
      right: [
        {
          key: '/basket',
          horizontalElem: (
            <NavLink className={horClassName} to="/basket">
              Корзина
            </NavLink>
          ),
          verticalElem: (
            <NavLink className={verClassName} to="/basket">
              Корзина
            </NavLink>
          ),
        },
        {
          key: 'theme-switcher',
          horizontalElem: <ThemeSwitcher className={s.switcher} />,
          verticalElem: <ThemeSwitcher className={s.switcher} />,
        },
        {
          key: 'login',
          horizontalElem: <Login className={s.switcher} />,
          verticalElem: <Login className={s.switcher} />,
        },
      ],
    }),
    []
  );

  return (
    <header className={cn(s.root, className)}>
      <Frame className={s.frame}>
        <Logo className={s.logo} />
        <ResponseNavigation title="Навигация" className={s.menu} left={left} right={right} />
      </Frame>
    </header>
  );
});

Header.displayName = 'Header';
