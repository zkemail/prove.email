import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconLink from './IconLink';
import HomeIcon from '@mui/icons-material/Home'; // Example icon
import { SvgIconProps } from '@mui/material';

interface IconLinkProps {
  href: string;
  IconComponent: React.ComponentType<SvgIconProps>;
  dark?: boolean;
  size?: 'small' | 'medium' | 'large';
  target?: boolean;
}

export default {
  title: 'IconLink',
  component: IconLink,
  argTypes: {
    href: { control: 'text' },
    dark: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    target: { control: 'boolean' },
    IconComponent: {
      control: false, // We won't use Storybook control for this, instead we'll set it in the story args
    },
  },
} as Meta<typeof IconLink>;

const Template: Story<IconLinkProps> = (args: IconLinkProps) => <IconLink {...args} />;

export const DefaultIconLink = Template.bind({});
DefaultIconLink.args = {
  href: 'https://example.com',
  IconComponent: HomeIcon,
  dark: false,
  size: 'medium',
  target: false,
};

export const DarkIconLink = Template.bind({});
DarkIconLink.args = {
  href: 'https://example.com',
  IconComponent: HomeIcon,
  dark: true,
  size: 'medium',
  target: false,
};

export const LargeIconLink = Template.bind({});
LargeIconLink.args = {
  href: 'https://example.com',
  IconComponent: HomeIcon,
  dark: false,
  size: 'large',
  target: false,
};
