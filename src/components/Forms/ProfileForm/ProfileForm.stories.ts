import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'Example/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileForm>;

export const Default: Story = {};
