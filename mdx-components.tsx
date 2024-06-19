import React from 'react';
import Image, { ImageProps } from 'next/image';

const components = {
  img: (props: ImageProps) => <Image {...props} alt="" />,
  // Add more components as needed
};

export default components;


// NOTE: Adding styles and components in mdx-components.tsx will affect all MDX files in your application.  https://nextjs.org/docs/pages/building-your-application/configuring/mdx








// 'use client'
// import React from 'react';
// import { MDXProvider } from '@mdx-js/react';
// import Image from 'next/image';
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypePrettyCode from 'rehype-pretty-code';

// const components = {
//   img: (props) => <Image {...props} alt={props.alt} />,
//   // ... other custom components
// };

// const mdxComponents = ({ children }) => (
//   <MDXProvider
//     components={components}
//     remarkPlugins={[remarkGfm, remarkMath]}
//     rehypePlugins={[
//       rehypeKatex,
//       [rehypePrettyCode, { /* options for rehype-pretty-code */ }],
//     ]}
//   >
//     {children}
//   </MDXProvider>
// );

// export default mdxComponents;