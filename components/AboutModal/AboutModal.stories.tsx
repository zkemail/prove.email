import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AboutModal from './AboutModal';
import { AboutModalProps } from '../../types'; // Assuming your types are in a separate file

export default {
  title: 'AboutModal',
  component: AboutModal,
  argTypes: {
    emails: { control: 'object' },
  },
} as Meta<typeof AboutModal>;

const Template: StoryFn<AboutModalProps> = (args) => <AboutModal {...args} />;

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
