import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import './profileForm.css';

interface ProfileFormProps {
  name: string;
  about: string;
}

interface Errors {
  text: string;
  isValid: boolean;
}

export const ProfileForm: FC = () => {
  const validate = (values: ProfileFormProps) => {
    const errors: Errors = { text: '', isValid: true };
    if (!values.name) {
      errors.text = 'Введите имя';
      errors.isValid = false;
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ name: '', about: '' }}
      onSubmit={(values, actions) => {
        console.log('actions: ', actions);
        actions.resetForm();
      }}
      validate={validate}
    >
      {(props) => (
        <Form>
          <h1>Профиль</h1>
          <div className={'storybook-profile-form--item'}>
            <span>
              <label htmlFor="name" className={'storybook-profile-form-item--label'}>
                Имя
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
            </span>
          </div>
          <div className={'storybook-profile-form--item'}>
            <span>
              <label htmlFor="about" className={'storybook-profile-form-item--label'}>
                Кратко о себе
              </label>
              <input
                id="about"
                type="text"
                name="about"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
              />
            </span>
          </div>
          <button type="submit" disabled={!props.errors.isValid}>
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
  );
};
