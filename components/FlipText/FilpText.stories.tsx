// import React from 'react';
// import { Meta, StoryFn } from '@storybook/react';
// import FlipText from './FlipText';
// import { FlipTextProps } from '../../types';

// export default {
//   title: 'FlipText',
//   component: FlipText,
//   argTypes: {
//     texts: { control: 'array' },
//   },
// } as Meta<typeof FlipText>;

// const Template: StoryFn<FlipTextProps> = (args) => <FlipText {...args} />;

// export const DefaultFlipText = Template.bind({});
// DefaultFlipText.args = {
//   texts: ['Secure Messaging', 'Private Communication', 'Encrypted Emails'],
// };


import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlipText from './FlipText';
import { FlipTextProps } from '../../types';

export default {
  title: 'FlipText',
  component: FlipText,
  argTypes: {
    texts: { control: { type: 'object' } }, // or you can try using 'array'
  },
} as Meta<typeof FlipText>;

const Template: StoryFn<FlipTextProps> = (args) => <FlipText {...args} />;

export const DefaultFlipText = Template.bind({});
DefaultFlipText.args = {
  texts: ['Secure Messaging', 'Private Communication', 'Encrypted Emails'],
};

