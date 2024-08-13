import React from 'react';
import Image, { ImageProps } from 'next/image';

const components = {
  img: (props: ImageProps) => <Image {...props} alt="" />,
  // Add more components as needed
};

export default components;

