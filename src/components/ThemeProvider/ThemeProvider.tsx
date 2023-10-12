/* eslint-disable import/named */
// noinspection TypeScriptUnresolvedVariable

import { ConfigProvider, theme as antdTheme, ThemeConfig } from 'antd';
import React, { createContext, FC, useCallback, useContext, useInsertionEffect, useMemo, useState } from 'react';
import vars from '../../styles/common.scss';
import s from './ThemeProvider.sass';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export enum Theme {
  dark = 'dark',
  light = 'light',
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

const KEY = 'theme';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(KEY) as Theme) || Theme.light);

  useInsertionEffect(() => {
    localStorage.setItem(KEY, theme);
    const html = document.body.parentElement;
    html.classList.add(theme);

    return () => html.classList.remove(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((v) => (v === Theme.light ? Theme.dark : Theme.light)), []);

  const isLight = theme === Theme.light;
  const colorPrimary = isLight ? vars.light_accent : vars.dark_accent;
  const algorithm = isLight ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm;
  const config: ThemeConfig = {
    token: {
      colorPrimary,
    },
    algorithm,
  };
  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider theme={config}>
        <div className={s.root}>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
