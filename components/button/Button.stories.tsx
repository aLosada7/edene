import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Laboratory/Button',
} as Meta;

export const cleanButton: Story<ButtonProps> = (...args) => (
  <Button {...args}>Hola</Button>
);
