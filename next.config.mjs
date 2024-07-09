import { createRequire } from 'module';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings' 
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    remarkPlugins: [remarkMath, remarkGfm],      
    // remarkPlugins: [ remarkMath],
    rehypePlugins: [
      rehypeHighlight, 
      rehypeSlug, 
      [rehypeAutolinkHeadings, { behavior: 'wrap' }], 
      rehypeKatex, 
      rehypePrettyCode
    ],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // other config options
});
