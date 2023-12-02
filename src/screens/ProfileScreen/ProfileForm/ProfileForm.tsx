import { Button, message } from 'antd';
import cn from 'clsx';
import { FormikConfig, useFormik } from 'formik';
import React, { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/components/Title';
import { ProfileForm, ProfileFormErrors, ProfileFormValues } from '../../../components/Forms/ProfileForm';
import { isNotDefinedString } from '../../../utils/validation';
import s from './ProfileForm.sass';

export type ProfileFormProps = {
  className?: string;
};

export const ProfileForm = memo<ProfileFormProps>(({ className }) => {
  const { t } = useTranslation();
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => ({
    initialValues: {
      name: profile?.name,
      about: profile?.about,
    },
    onSubmit: (values, { setErrors }) => {
      update({ variables: { input: { name: values.name, about: values.about } } })
        .then(() => message.success(t(`screens.ProfileScreen.updateProfile.success`)))
        .catch(catcherValidator({ setErrors, getMessage: (code) => t(`errors.${code}`) }));
    },
    validate: (values) => {
      const errors = {} as ProfileFormErrors;
      if (isNotDefinedString(values.name)) {
        errors.name = t(`errors.is_required`);
      }
      return errors;
    },
  }));

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({ name: profile?.name, about: profile?.about });
  }, [profile, setValues]);

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>{t(`screens.ProfileScreen.updateProfile.title`)}</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary" loading={loading} onClick={submitForm}>
        {t(`screens.ProfileScreen.updateProfile.save`)}
      </Button>
    </div>
  );
});

ProfileForm.displayName = 'ProfileForm';
