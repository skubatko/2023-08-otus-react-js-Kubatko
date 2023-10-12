import React from 'react';
import { Button } from '../../stories/Button';
import './modal.css';

interface ModalProps {
  visible: boolean;
  value: string;
  onClose: () => void;
}

export function Modal({ visible = false, value = '', onClose }: ModalProps) {
  if (!visible) return null;

  return (
    <div className={'storybook-modal'}>
      <h3>Modal</h3>
      <span>{value}</span>
      <Button label="Close" onClick={onClose} />
    </div>
  );
}
