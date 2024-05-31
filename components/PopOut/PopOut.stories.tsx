import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PopOut from './PopOut';

interface Card {
  label: string;
  url: string;
}

interface PopOutProps {
  topText: string;
  mainText: string;
  descriptionText: string;
  cards: Card[];
  toggleName: string;
}

export default {
  title: 'PopOut',
  component: PopOut,
  argTypes: {
    topText: { control: 'text' },
    mainText: { control: 'text' },
    descriptionText: { control: 'text' },
    toggleName: { control: 'text' },
    cards: { control: 'object' },
  },
} as Meta<typeof PopOut>;

const Template: StoryFn<PopOutProps> = (args) => <PopOut {...args} />;

export const DefaultPopOut = Template.bind({});
DefaultPopOut.args = {
  topText: 'Important Announcement',
  mainText: 'Learn more about our new features',
  descriptionText: 'Click below to see detailed information about our latest update.',
  toggleName: 'More Info',
  cards: [
    { label: 'Feature 1', url: 'https://example.com/feature1' },
    { label: 'Feature 2', url: 'https://example.com/feature2' },
    { label: 'Feature 3', url: 'https://example.com/feature3' },
  ],
};

export const PopOutWithFewCards = Template.bind({});
PopOutWithFewCards.args = {
  topText: 'Quick Links',
  mainText: 'Access our resources',
  descriptionText: 'Find helpful links below.',
  toggleName: 'Show Links',
  cards: [
    { label: 'Docs', url: 'https://example.com/docs' },
    { label: 'Support', url: 'https://example.com/support' },
  ],
};

export const PopOutWithManyCards = Template.bind({});
PopOutWithManyCards.args = {
  topText: 'Explore More',
  mainText: 'Discover more features',
  descriptionText: 'Check out the links below to explore additional functionalities.',
  toggleName: 'Explore',
  cards: [
    { label: 'Feature 1', url: 'https://example.com/feature1' },
    { label: 'Feature 2', url: 'https://example.com/feature2' },
    { label: 'Feature 3', url: 'https://example.com/feature3' },
    { label: 'Feature 4', url: 'https://example.com/feature4' },
    { label: 'Feature 5', url: 'https://example.com/feature5' },
  ],
};
