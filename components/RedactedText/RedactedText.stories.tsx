import React from 'react';
import { Meta, Story } from '@storybook/react';
import RedactedText from './RedactedText';

interface RedactedTextProps {
  text: string;
}

export default {
  title: 'RedactedText',
  component: RedactedText,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta<typeof RedactedText>;

const Template: Story<RedactedTextProps> = (args) => <RedactedText {...args} />;

export const DefaultRedactedText = Template.bind({});
DefaultRedactedText.args = {
  text: 'This is a secret text',
};

export const LongRedactedText = Template.bind({});
LongRedactedText.args = {
  text: 'This is a very long secret text that spans multiple lines to test the redaction effect over a longer span.',
};

export const ShortRedactedText = Template.bind({});
ShortRedactedText.args = {
  text: 'Secret',
};
