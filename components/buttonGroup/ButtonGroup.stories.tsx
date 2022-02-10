import { Story, Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import Button from '../button/Button';
import './styles.scss';

export default {
  component: ButtonGroup,
  title: 'Components/Button',
} as Meta;

export const buttonGroup: Story<ButtonGroupProps> = (...args) => (
  <ButtonGroup {...args}>
    <Button id="btnEditAccount">Edit Account</Button>
    <ButtonGroup>
      <Button id="btnGroupDrop">Transfer Funds</Button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop">
        <li>Action</li>
        <li>Another Action</li>
      </ul>
    </ButtonGroup>
  </ButtonGroup>
);
