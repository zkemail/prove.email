import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import VideoCarousel from './VideoCarousel';

export default {
  title: 'VideoCarousel',
  component: VideoCarousel,
} as Meta<typeof VideoCarousel>;

const Template: StoryFn = (args) => <VideoCarousel {...args} />;

export const DefaultVideoCarousel = Template.bind({});
DefaultVideoCarousel.args = {};
