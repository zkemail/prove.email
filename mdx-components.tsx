
import React from 'react';
import Image, { ImageProps } from 'next/image';

const components = {
  img: (props: ImageProps) => <Image {...props} alt="" />,
  // Add more components as needed
};

export default components;







// NOTE: Adding styles and components in mdx-components.tsx will affect all MDX files in your application.  https://nextjs.org/docs/pages/building-your-application/configuring/mdx