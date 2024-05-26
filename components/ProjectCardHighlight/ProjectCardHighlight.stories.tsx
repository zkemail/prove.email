import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProjectCardHighlight from './ProjectCardHighlight';

interface ProjectCardHighlightProps {
  projectTitle: string;
  projectDescription: string;
  projectTag: string;
  url: string;
}

export default {
  title: 'ProjectCardHighlight',
  component: ProjectCardHighlight,
  argTypes: {
    projectTitle: { control: 'text' },
    projectDescription: { control: 'text' },
    projectTag: { control: 'text' },
    url: { control: 'text' },
  },
} as Meta<typeof ProjectCardHighlight>;

const Template: Story<ProjectCardHighlightProps> = (args) => <ProjectCardHighlight {...args} />;

export const DefaultProjectCardHighlight = Template.bind({});
DefaultProjectCardHighlight.args = {
  projectTitle: 'Project Alpha',
  projectDescription: 'This is a description of Project Alpha. It covers the key features and objectives of the project.',
  projectTag: 'Technology',
  url: 'https://example.com/project-alpha',
};

export const LargeProjectCardHighlight = Template.bind({});
LargeProjectCardHighlight.args = {
  projectTitle: 'Project Beta',
  projectDescription: 'Project Beta aims to revolutionize the industry with cutting-edge technology and innovative solutions.',
  projectTag: 'Innovation',
  url: 'https://example.com/project-beta',
};

export const SmallProjectCardHighlight = Template.bind({});
SmallProjectCardHighlight.args = {
  projectTitle: 'Project Gamma',
  projectDescription: 'A brief overview of Project Gamma, highlighting its main aspects and benefits.',
  projectTag: 'Research',
  url: 'https://example.com/project-gamma',
};
