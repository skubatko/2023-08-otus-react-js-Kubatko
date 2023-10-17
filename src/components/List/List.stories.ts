import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Example/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {};
