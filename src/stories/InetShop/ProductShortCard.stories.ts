import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ProductShortCard } from './ProductShortCard';

const meta: Meta<typeof ProductShortCard> = {
  title: 'Example/ProductShortCard',
  component: ProductShortCard,
};

export default meta;
type Story = StoryObj<typeof ProductShortCard>;

export const Default: Story = {};
