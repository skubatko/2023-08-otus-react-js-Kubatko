import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ProductAddForm } from './ProductAddForm';

const meta: Meta<typeof ProductAddForm> = {
  title: 'Example/ProductAddForm',
  component: ProductAddForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductAddForm>;

export const Default: Story = {};
