import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import './loginForm.css';

interface LoginFormProps {
  email: string;
  password: string;
}

interface Errors {
  text: string;
  isValid: boolean;
}

export const LoginForm: FC = () => {
  const validate = (values: LoginFormProps) => {
    const errors: Errors = { text: '', isValid: true };
    if (!values.email) {
      errors.text = 'Введите email';
      errors.isValid = false;
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log('actions: ', actions);
        actions.resetForm();
      }}
      validate={validate}
    >
      {(props) => (
        <Form>
          <h1>Вход</h1>
          <div className="storybook-login-form--item">
            <span>
              <label htmlFor="email" className="storybook-login-form-item--label">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
            </span>
          </div>
          <div className="storybook-login-form--item">
            <span>
              <label htmlFor="description" className="storybook-login-form-item--label">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
              />
            </span>
          </div>
          <button type="submit" disabled={!props.isValid}>
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
  );
};
