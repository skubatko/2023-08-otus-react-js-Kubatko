import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Frame } from 'src/components/Frame';
import { ProductAddForm } from 'src/components/InetShop/ProductAddForm/ProductAddForm';
import { ProductList } from 'src/components/InetShop/ProductList/ProductList';
import { Modal } from 'src/components/Modal/Modal';
import { Page } from 'src/components/Page';
import { RootState } from 'src/store';
import { profileSelectors } from 'src/store/profile';
import { Button } from 'src/stories/Button';
import s from './ProductScreen.sass';

export const ProductScreen: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = (): void => setModalVisible(true);
  const closeModal = (): void => setModalVisible(false);
  const profile = useSelector<RootState, RootState['profile']>(profileSelectors.get);

  if (profile && profile.email && profile.email.startsWith('admin')) {
    return (
      <Page title="Товары" className={s.root}>
        <Frame>
          <ProductList />
          <div className={s.root}>
            <Button label="Добавить" onClick={openModal} />
          </div>
          <Modal visible={modalVisible} onClose={closeModal}>
            <ProductAddForm />
          </Modal>
        </Frame>
      </Page>
    );
  }

  return (
    <Page title="Товары" className={s.root}>
      <Frame>
        <ProductList />
      </Frame>
    </Page>
  );
};

export default ProductScreen;
