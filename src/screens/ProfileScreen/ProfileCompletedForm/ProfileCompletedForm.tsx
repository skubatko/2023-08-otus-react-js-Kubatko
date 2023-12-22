import { Button } from 'antd';
import cn from 'clsx';
import { FormikConfig, useFormik } from 'formik';
import React, { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ProfileForm, ProfileFormErrors, ProfileFormValues } from 'src/components/Forms/ProfileForm';
import { Title } from 'src/components/Title';
import { profileSelectors } from 'src/store/profile';
import { isNotDefinedString } from 'src/utils/validation';
import s from './ProfileCompletedForm.sass';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(({ className }) => {
  const profile = useSelector(profileSelectors.get);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(
    () => ({
      initialValues: {
        name: profile?.name,
        about: profile?.about,
      },
      onSubmit: (values) => {
        console.log(values.name, values.about);
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательное поле';
        }
        return errors;
      },
    }),
    [profile]
  );

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
      <Title className={s.title}>Изменить профиль</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary" onClick={submitForm}>
        Сохранить
      </Button>
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
