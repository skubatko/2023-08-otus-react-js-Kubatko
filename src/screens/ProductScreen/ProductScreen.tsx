import React, { FC, useState } from 'react';
import { Frame } from 'src/components/Frame';
import { ProductAddForm } from 'src/components/InetShop/ProductAddForm/ProductAddForm';
import { ProductList } from 'src/components/InetShop/ProductList/ProductList';
import { Modal } from 'src/components/Modal/Modal';
import { Page } from 'src/components/Page';
import { Button } from 'src/stories/Button';
import s from './ProductScreen.sass';

export const ProductScreen: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = (): void => setModalVisible(true);
  const closeModal = (): void => setModalVisible(false);

  return (
    <Page title="Товары" className={s.root}>
      <Frame>
        <ProductList />
        <div className={s.root}>
          <Button label="Open" onClick={openModal} />
        </div>
        <Modal visible={modalVisible} onClose={closeModal}>
          {<ProductAddForm />}
        </Modal>
      </Frame>
    </Page>
  );
};

export default ProductScreen;
