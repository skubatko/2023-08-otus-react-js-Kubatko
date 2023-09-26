import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';

import { Basket } from './Basket';

const meta: Meta<typeof Basket> = {
  title: 'Example/Basket',
  component: Basket,
};

export default meta;
type Story = StoryObj<typeof Basket>;

export const Default: Story = {};
