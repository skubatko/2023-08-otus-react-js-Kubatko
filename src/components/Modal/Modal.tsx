import React, { FC, useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../stories/Button';
import './modal.css';

export enum ModalAction {
  VISIBLE,
  INVISIBLE,
  UNMOUNTED,
}

export type ModalState = {
  visible: boolean;
  mounted: boolean;
};

const reducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action) {
    case ModalAction.VISIBLE:
      return { visible: true, mounted: true };

    case ModalAction.INVISIBLE:
      return { ...state, visible: false };

    case ModalAction.UNMOUNTED:
      if (!state.visible) return { ...state, mounted: false };
      return state;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = action;
      return state;
    }
  }
};

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  container?: HTMLElement;
  visible?: boolean;
  afterClose?: () => void;
}

export function ModalBase({ visible = false, afterClose, onClose, children }: ModalProps) {
  if (!visible) return null;

  const onTransitionEnd = (): void => {
    if (!visible) setTimeout(() => afterClose?.());
  };

  return (
    <div className={'storybook-modal--root'} onTransitionEnd={onTransitionEnd}>
      <div className={'storybook-modal'}>
        <h3>Modal</h3>
        <div className={'storybook-modal--text'}>{children}</div>
        <div className={'storybook-modal--button'}>
          <Button label="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

export const Modal: FC<ModalProps> = ({ container = document.body, visible, afterClose, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { visible, mounted: false }, undefined);

  useEffect(() => {
    if (visible) {
      dispatch(ModalAction.VISIBLE);
    } else {
      dispatch(ModalAction.INVISIBLE);
    }
  }, [visible]);

  const handleAfterClose = (): void => {
    afterClose?.();
    dispatch(ModalAction.UNMOUNTED);
  };

  if (!state.mounted) return null;

  return createPortal(<ModalBase afterClose={handleAfterClose} visible={state.visible} {...props} />, container);
};
