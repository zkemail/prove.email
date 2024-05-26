import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutModal, { AboutModalProps } from './AboutModal';

export default {
  title: 'AboutModal',
  component: AboutModal,
  argTypes: {
    emails: { control: 'object' },
  },
} as ComponentMeta<typeof AboutModal>;

const Template: ComponentStory<typeof AboutModal> = (args: AboutModalProps) => <AboutModal {...args} />;

export const AboutModalTest = Template.bind({});
AboutModalTest.args = {
  emails: [
    {
      to: "bob@gmail.com",
      from: "me@gmail.com",
      subject: "subject subject subject",
      mainText: "description test about about about",
    },
    {
      to: "alice@gmail.com",
      from: "me@gmail.com",
      subject: "another subject",
      mainText: "another description",
    },
  ],
};
