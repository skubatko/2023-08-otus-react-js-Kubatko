import React, { FC } from 'react';
import { ProfileForm } from 'src/components/Forms/ProfileForm/ProfileForm';
import { Frame } from 'src/components/Frame';
import { Page } from 'src/components/Page';
import s from './ProfileScreen.sass';

export const ProfileScreen: FC = () => (
  <Page title="Профиль" className={s.root}>
    <Frame>
      <ProfileForm />
    </Frame>
  </Page>
);

export default ProfileScreen;
