import React, { FC } from 'react';
import { ProfileForm } from 'src/components/Forms/ProfileForm/ProfileForm';
import { Frame } from 'src/components/Frame';
import s from './ProfileScreen.sass';

export const ProfileScreen: FC = () => (
  <div className={s.root}>
    <Frame>
      <ProfileForm />
    </Frame>
  </div>
);

export default ProfileScreen;
