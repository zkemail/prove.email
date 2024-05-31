import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomCardAbout from './CustomCardAbout';
import { CustomCardProps } from '../../types';

export default {
  title: 'CustomCard',
  component: CustomCardAbout,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    url: { control: 'text' },
  },
} as Meta<typeof CustomCardAbout>;

const Template: StoryFn<CustomCardProps> = (args: React.JSX.IntrinsicAttributes & CustomCardProps) => <CustomCardAbout {...args} />;

export const DefaultCustomCardAbout = Template.bind({});
DefaultCustomCardAbout.args = {
  title: 'Explore the World',
  description: 'Discover new places and adventures waiting for you.',
  url: 'https://example.com',
};

export const CustomCardWithLongText = Template.bind({});
CustomCardWithLongText.args = {
  title: 'Explore the World with an Extensive Guide',
  description: 'Discover new places and adventures waiting for you in this extensive guide that covers all the continents and offers detailed information on every major attraction. Perfect for avid travelers and explorers.',
  url: 'https://example.com',
};

export const CustomCardWithShortText = Template.bind({});
CustomCardWithShortText.args = {
  title: 'Quick Trip',
  description: 'A brief overview of your next destination.',
  url: 'https://example.com',
};
