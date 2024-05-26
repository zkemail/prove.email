import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoCarousel from './VideoCarousel';

export default {
  title: 'VideoCarousel',
  component: VideoCarousel,
} as Meta<typeof VideoCarousel>;

const Template: Story = (args) => <VideoCarousel {...args} />;

export const DefaultVideoCarousel = Template.bind({});
DefaultVideoCarousel.args = {};
