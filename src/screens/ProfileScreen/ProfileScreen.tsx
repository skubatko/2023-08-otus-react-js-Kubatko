import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../../components/Page';
import { ProfileForm } from './ProfileForm';
import s from './ProfileScreen.sass';

export const ProfileScreen: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.ProfileScreen.title`}>
      <ProfileForm className={s.block} />
    </Page>
  );
};

export default ProfileScreen;
