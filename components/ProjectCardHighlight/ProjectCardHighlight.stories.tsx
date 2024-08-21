import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProjectCardHighlight from './ProjectCardHighlight';

interface ProjectCardHighlightProps {
  projectTitle: string;
  projectDescription: string;
  projectTag: string;
  url: string;
  imageUrl: string;
}

export default {
  title: 'ProjectCardHighlight',
  component: ProjectCardHighlight,
  argTypes: {
    projectTitle: { control: 'text' },
    projectDescription: { control: 'text' },
    projectTag: { control: 'text' },
    url: { control: 'text' },
    imageUrl: {control: 'text'}
  },
} as Meta<typeof ProjectCardHighlight>;

const Template: StoryFn<ProjectCardHighlightProps> = (args) => <ProjectCardHighlight {...args} />;

export const DefaultProjectCardHighlight = Template.bind({});
DefaultProjectCardHighlight.args = {
  projectTitle: 'Project Alpha',
  projectDescription: 'This is a description of Project Alpha. It covers the key features and objectives of the project.',
  projectTag: 'Technology',
  url: 'https://example.com/project-alpha',
  imageUrl: 'https://zkp2p.xyz/logo512.png'
};

export const LargeProjectCardHighlight = Template.bind({});
LargeProjectCardHighlight.args = {
  projectTitle: 'Project Beta',
  projectDescription: 'Project Beta aims to revolutionize the industry with cutting-edge technology and innovative solutions.',
  projectTag: 'Innovation',
  url: 'https://example.com/project-beta',
  imageUrl: 'https://zkp2p.xyz/logo512.png'
};


export const SmallProjectCardHighlight = Template.bind({});
SmallProjectCardHighlight.args = {
  projectTitle: 'Project Gamma',
  projectDescription: 'A brief overview of Project Gamma, highlighting its main aspects and benefits.',
  projectTag: 'Research',
  url: 'https://example.com/project-gamma',
  imageUrl: 'https://zkp2p.xyz/logo512.png'
};
