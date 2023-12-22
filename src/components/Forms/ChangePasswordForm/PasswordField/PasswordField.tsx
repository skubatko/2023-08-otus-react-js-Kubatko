import { LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import cn from 'clsx';
import { FormikHandlers } from 'formik/dist/types';
import React, { memo } from 'react';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { ChangePasswordFormProps } from '../types';
import s from './PasswordField.sass';

export type PasswordFieldProps = Pick<ChangePasswordFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
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
  ({ className, onChange, onBlur, onPressEnter, touched, value, errors, disabled, submitCount, autoFocusElement }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title="Пароль" required validateStatus={validateStatus} help={help}>
        <Input.Password
          ref={autoFocusElement}
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
