// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;



// import createMDX from '@next/mdx'
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include markdown and MDX files
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 
// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// })
 
// // Merge MDX config with Next.js config
// export default withMDX(nextConfig)









// import nextMDX from '@next/mdx'

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: []
//   }
// })

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   experimental: {
//     appDir: true,
//     mdxRs: true
//   },
//   images: {
//     domains: ['github.com', 'lh3.googleusercontent.com']
//   }
// }

// export default withMDX(nextConfig)





// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/
//   });
//   module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx']
//   });



// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// });

// export default withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
// });


import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});
