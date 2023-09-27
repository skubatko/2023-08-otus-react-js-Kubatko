import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  argTypes: { visible: true },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    visible: true,
  },
};
