import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { Product } from './Product';

const meta: Meta<typeof Product> = {
  title: 'Example/Product',
  component: Product,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Default: Story = {};
