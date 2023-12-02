import cn from 'clsx';
import React, { memo } from 'react';
import s from './Frame.sass';

export type FrameProps = {
  className?: string;
  children: React.ReactNode;
};

export const Frame = memo<FrameProps>(({ className, children }) => (
  <div className={cn(s.root, className)}>{children}</div>
));

Frame.displayName = 'Frame';
