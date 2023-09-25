import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children?: string[];
}

export function Modal({ visible = false, children }: ModalProps) {
  if (!visible) return null;

  return (
    <div className={'storybook-modal'}>
      <h3>Title</h3>
      <button type="button">Close</button>
    </div>
  );
}
