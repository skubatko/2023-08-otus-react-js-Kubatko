import { Button } from 'antd';
import cn from 'clsx';
import { FormikConfig, useFormik } from 'formik';
import React, { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthForm, AuthFormErrors, AuthFormValues } from 'src/components/Forms';
import { NavigationState } from 'src/navigation/types';
import { profileActions } from 'src/store/profile';
import { tokenActions } from 'src/store/token';
import { isLongEnough, isNotDefinedString } from 'src/utils/validation';
import s from './SingInBlock.sass';

export type SingInBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingInBlock = memo<SingInBlockProps>(({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>>(
    () => ({
      onSubmit: (values, { resetForm }) => {
        dispatch(tokenActions.set(Math.random().toString(16)));
        dispatch(
          profileActions.set({
            id: Math.random().toString(4),
            email: values.email,
            signUpDate: new Date().toString(),
          })
        );
        resetForm();
        navigate((location.state as NavigationState)?.from || '/');
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          errors.email = 'Обязательное поле';
        }
        if (isNotDefinedString(values.password)) {
          errors.password = 'Обязательное поле';
        } else if (!isLongEnough(values.password)) {
          errors.password = 'Слишком короткий пароль';
        }
        return errors;
      },
    }),
    [dispatch, location.state, navigate]
  );

  const formik = useFormik<AuthFormValues>({
    onSubmit,
    initialValues,
    validate,
  });

  const { submitForm } = formik;
  return (
    <div className={cn(s.root, className)}>
      <AuthForm formManager={formik} />
      <div className={s.bottom}>
        <Button className={s.submit} type="primary" onClick={submitForm}>
          Войти
        </Button>
      </div>
    </div>
  );
});

SingInBlock.displayName = 'SingInBlock';
