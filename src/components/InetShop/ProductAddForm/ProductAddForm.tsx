import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import './productAddForm.css';

interface ProductAddFormProps {
  name: string;
  description: string;
  category: string;
  cost: number;
}

interface Errors {
  text: string;
  isValid: boolean;
}

export const ProductAddForm: FC = () => {
  const validate = (values: ProductAddFormProps) => {
    const errors: Errors = { text: '', isValid: true };
    if (!values.name) {
      errors.text = 'Введите название';
      errors.isValid = false;
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ category: '', cost: 0, description: '', name: '' }}
      onSubmit={(values, actions) => {
        console.log('actions: ', actions);
        actions.resetForm();
      }}
      validate={validate}
    >
      {(props) => (
        <Form>
          <h1>Добавить товар</h1>
          <div className={'storybook-product-add-form--item'}>
            <span>
              <label htmlFor="name" className={'storybook-product-add-form-item--label'}>
                Название
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
          <div className={'storybook-product-add-form--item'}>
            <span>
              <label htmlFor="description" className={'storybook-product-add-form-item--label'}>
                Описание
              </label>
              <input
                id="description"
                type="text"
                name="description"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
              />
            </span>
          </div>
          <div className={'storybook-product-add-form--item'}>
            <span>
              <label htmlFor="category" className={'storybook-product-add-form-item--label'}>
                Категория
              </label>
              <input
                id="category"
                type="text"
                name="category"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.category}
              />
            </span>
          </div>
          <div className={'storybook-product-add-form--item'}>
            <span>
              <label htmlFor="cost" className={'storybook-product-add-form-item--label'}>
                Стоимость
              </label>
              <input
                id="cost"
                type="text"
                name="cost"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.cost}
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
