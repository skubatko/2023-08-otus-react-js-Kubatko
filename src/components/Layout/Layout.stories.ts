import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
