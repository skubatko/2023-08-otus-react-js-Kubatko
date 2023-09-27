import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Example/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
