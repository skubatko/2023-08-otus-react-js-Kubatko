import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { getRandomId } from '../../../utils/random';
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
    initialProducts: [{ id: getRandomId(), name: 'initialProduct' }],
  },
};
