import { LockOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input';
import cn from 'clsx';
import { FormikHandlers } from 'formik/dist/types';
import React, { memo } from 'react';
import { FormItem } from 'src/components/FormItem';
import { AuthFormProps } from 'src/components/Forms/AuthForm';
import { getValidates } from 'src/utils/validation';
import s from './PasswordField.sass';

export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, touched, value, errors, disabled, submitCount }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title="Пароль" required validateStatus={validateStatus} help={help}>
        <Input.Password
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Укажите пароль"
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
