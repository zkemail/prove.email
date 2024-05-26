import React from 'react';
import { Story, Meta } from '@storybook/react';
import ActionCard from './ActionCard';
import { ActionCardProps } from '../../types';

export default {
  title: 'ActionCard',
  component: ActionCard,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
    topText: { control: 'text' },
    light: { control: 'boolean' },
  },
} as Meta<typeof ActionCard>;

const Template: Story<ActionCardProps> = (args: React.JSX.IntrinsicAttributes & ActionCardProps) => <ActionCard {...args} />;

export const LightActionCard = Template.bind({});
LightActionCard.args = {
  title: 'Join Our Community',
  text: 'Connect with like-minded individuals and stay updated with the latest news.',
  buttonText: 'Get Started',
  buttonLink: '#',
  topText: 'Welcome!',
  light: true,
};

export const DarkActionCard = Template.bind({});
DarkActionCard.args = {
  title: 'Join Our Community',
  text: 'Connect with like-minded individuals and stay updated with the latest news.',
  buttonText: 'Get Started',
  buttonLink: '#',
  topText: 'Welcome!',
  light: false,
};
