import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

import avatar from '../../../assets/img/avatar.jpeg';

export default {
  component: Avatar,
  title: 'Laboratory/Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  src: avatar,
};

export const Square = Template.bind({});
Square.args = {
  src: avatar,
  shape: 'square',
};

export const CircleInnerDot = Template.bind({});
CircleInnerDot.storyName = 'Circle + Inner Dot';
CircleInnerDot.args = {
  src: avatar,
  shape: 'circle',
  connected: true,
  dotPosition: 'top',
};

export const SquareInnerDot = Template.bind({});
SquareInnerDot.storyName = 'Square + Inner Dot';
SquareInnerDot.args = {
  src: avatar,
  shape: 'square',
  connected: true,
  dotPosition: 'top',
};

export const CircleDot = Template.bind({});
CircleDot.storyName = 'Circle + Dot';
CircleDot.args = {
  src: avatar,
  shape: 'circle',
  connected: true,
  dotPosition: 'bottom',
};

export const SquareDot = Template.bind({});
SquareDot.storyName = 'Square + Dot';
SquareDot.args = {
  src: avatar,
  shape: 'square',
  connected: true,
  dotPosition: 'bottom',
};

export const CircleOutline = Template.bind({});
CircleOutline.storyName = 'Circle + Outline';
CircleOutline.args = {
  src: avatar,
  shape: 'circle',
  outline: true,
};

export const SquareOutline = Template.bind({});
SquareOutline.storyName = 'Square + Outline';
SquareOutline.args = {
  src: avatar,
  shape: 'square',
  outline: true,
};

export const CircleNoAvatarIcon = Template.bind({});
CircleNoAvatarIcon.storyName = 'No avatar (icon)';
CircleNoAvatarIcon.args = {
  outline: true,
};

export const CircleNoAvatarInitials = Template.bind({});
CircleNoAvatarInitials.storyName = 'No avatar (initials)';
CircleNoAvatarInitials.args = {
  name: 'Alvaro Losada',
  outline: true,
};
