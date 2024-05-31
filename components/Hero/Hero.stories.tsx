import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta<typeof Hero>;

const Template: StoryFn = (args: React.JSX.IntrinsicAttributes) => <Hero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {};
