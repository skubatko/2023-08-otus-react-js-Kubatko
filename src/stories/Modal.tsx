import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export function Modal({ visible = false, children }: ModalProps) {
  if (!visible) return null;

  return (
    <div className={'storybook-modal'}>
      <h3>Title</h3>
      <button type="button">Close</button>
      {children}
    </div>
  );
}
