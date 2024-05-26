import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta<typeof Hero>;

const Template: Story = (args: React.JSX.IntrinsicAttributes) => <Hero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {};
