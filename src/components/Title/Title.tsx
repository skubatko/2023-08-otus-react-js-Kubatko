import cn from 'clsx';
import React, { FC } from 'react';
import s from './Title.sass';

export type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactElement | React.ReactNode;
  required?: boolean;
};

export const Title: FC<TitleProps> = ({ className, required, ...props }) => (
  <div {...props} className={cn(s.root, required && s.required, className)} />
);
