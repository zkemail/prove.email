
// // import { createRequire } from 'module';
// // const require = createRequire(import.meta.url);
// // const withMDX = require('@next/mdx')({
// //   extension: /\.mdx?$/
// // });

// // export default withMDX({
// //   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
// // });


// import { createRequire } from 'module';
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypePrettyCode from 'rehype-pretty-code';

// const require = createRequire(import.meta.url);
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm, remarkMath],
//     rehypePlugins: [
//       rehypeKatex,
//       [
//         rehypePrettyCode,
//         {
//           // Options for rehype-pretty-code
//         },
//       ],
//     ],
//   },
// });

// export default withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
//   // ...other next.js config
// });

import { createRequire } from 'module';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, {
        // your options here
      }],
    ],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // other config options
});
