import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import cn from 'clsx';
import { FormikHandlers } from 'formik/dist/types';
import React, { memo } from 'react';
import { FormItem } from 'src/components/FormItem';
import { AuthFormProps } from 'src/components/Forms/AuthForm';
import { getValidates } from 'src/utils/validation';
import s from './EmailField.sass';

export type EmailFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onPressEnter: () => void;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const EmailField = memo<EmailFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title="Email" required validateStatus={validateStatus} help={help}>
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input"
          autoFocus
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Укажите Email"
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField';
