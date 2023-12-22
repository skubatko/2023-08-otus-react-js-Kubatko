import React, { FC } from 'react';
import { Page } from '../../components/Page';
import s from './ProfileScreen.sass';
import { SettingsBlock } from './SettingsBlock';

export const ProfileScreen: FC = () => (
  <Page title="Профиль">
    <SettingsBlock className={s.block} />
  </Page>
);

export default ProfileScreen;
