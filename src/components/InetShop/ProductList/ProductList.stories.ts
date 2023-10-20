import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { Product } from '../Product/Product';
import { ProductList } from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'Example/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    products: [Product],
  },
};
