import React from 'react';
import { Meta, Story } from '@storybook/react';
import FlipText from './FlipText';
import { FlipTextProps } from '../../types';

export default {
  title: 'FlipText',
  component: FlipText,
  argTypes: {
    texts: { control: 'array' },
  },
} as Meta<typeof FlipText>;

const Template: Story<FlipTextProps> = (args) => <FlipText {...args} />;

export const DefaultFlipText = Template.bind({});
DefaultFlipText.args = {
  texts: ['Secure Messaging', 'Private Communication', 'Encrypted Emails'],
};
