/* eslint-disable import/named,import/no-named-as-default-member */
// noinspection JSIgnoredPromiseFromCall

import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export const LANG_STORAGE_KEY = 'lang';

export enum Locale {
  ru = 'ru',
  en = 'en',
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.ru,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  } as InitOptions);

export default i18n;
