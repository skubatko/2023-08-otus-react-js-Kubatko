import React, { useState } from 'react';
import { Button } from '../../stories/Button';
import { Modal } from '../Modal/Modal';
import './layout.css';

export const Layout: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const openModal = (): void => setModalVisible(true);
  const closeModal = (): void => setModalVisible(false);

  return (
    <article>
      <section className={'storybook-layout'}>
        <h2>Layout</h2>
        <div className={'storybook-layout--input'}>
          <input onChange={onChangeInputText} />
        </div>
        <div className={'storybook-layout--button'}>
          <Button label="Open" onClick={openModal} />
        </div>
      </section>
      <Modal visible={modalVisible} value={inputText} onClose={closeModal} />
    </article>
  );
};
