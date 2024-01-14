import { Button } from 'antd';
import cn from 'clsx';
import { FormikConfig, useFormik } from 'formik';
import React, { memo, useMemo } from 'react';
import { ChangePasswordForm, ChangePasswordFormErrors, ChangePasswordFormValues } from 'src/components/Forms';
import { Title } from 'src/components/Title';
import { isNotDefinedString } from 'src/utils/validation';
import s from './ChangePasswordCompletedForm.sass';

export type ChangePasswordCompletedFormProps = {
  className?: string;
};

const initialValues: ChangePasswordFormValues = {
  password: undefined,
  newPassword: undefined,
  repeatPassword: undefined,
};

export const ChangePasswordCompletedForm = memo<ChangePasswordCompletedFormProps>(({ className }) => {
  const { onSubmit, validate } = useMemo<Pick<FormikConfig<ChangePasswordFormValues>, 'onSubmit' | 'validate'>>(
    () => ({
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
      validate: (values) => {
        const errors = {} as ChangePasswordFormErrors;
        if (isNotDefinedString(values.password)) {
          errors.password = 'Обязательное поле';
        }
        if (isNotDefinedString(values.newPassword)) {
          errors.newPassword = 'Обязательное поле';
        }
        if (isNotDefinedString(values.repeatPassword)) {
          errors.repeatPassword = 'Обязательное поле';
        }
        if (values.repeatPassword !== values.newPassword) {
          errors.newPassword = 'Пароли не совпадают';
          errors.repeatPassword = 'Пароли не совпадают';
        }
        return errors;
      },
    }),
    []
  );

  const formManager = useFormik<ChangePasswordFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm } = formManager;

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>Изменить пароль</Title>
      <ChangePasswordForm formManager={formManager} />
      <Button type="primary" onClick={submitForm}>
        Сохранить
      </Button>
    </div>
  );
});

ChangePasswordCompletedForm.displayName = 'ProfileCompletedForm';
