// // import fs from 'fs';
// // import path from 'path';
// // import { compileMDX } from 'next-mdx-remote/rsc';

// // const rootDirectory = path.join(process.cwd(), 'app', 'content');

// // export const getPostBySlug = async (slug) => {
// //   const realSlug = slug.replace(/\.mdx$/, '');
// //   const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

// //   const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

// //   const { frontmatter, content } = await compileMDX({
// //     source: fileContent,
// //     options: { parseFrontmatter: true },
// //   });

// //   return { meta: { ...frontmatter, slug: realSlug }, content };
// // };

// // export const getAllPostsMeta = async () => {
// //   const files = fs.readdirSync(rootDirectory);

// //   let posts = [];

// //   for (const file of files) {
// //     const { meta } = await getPostBySlug(file);
// //     posts.push(meta);
// //   }

// //   return posts;
// // };












// import fs from 'fs';
// import path from 'path';
// import { compileMDX } from 'next-mdx-remote/rsc';
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypePrettyCode from 'rehype-pretty-code';

// const rootDirectory = path.join(process.cwd(), 'app', 'content');

// export const getPostBySlug = async (slug) => {
//   const realSlug = slug.replace(/\.mdx$/, '');
//   const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

//   const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: {
//       parseFrontmatter: true,
//       remarkPlugins: [remarkGfm, remarkMath],
//       rehypePlugins: [rehypeKatex, rehypePrettyCode],
//     },
//   });

//   return { meta: { ...frontmatter, slug: realSlug }, content };
// };

// export const getAllPostsMeta = async () => {
//   const files = fs.readdirSync(rootDirectory);

//   let posts = [];

//   for (const file of files) {
//     const { meta } = await getPostBySlug(file);
//     posts.push(meta);
//   }

//   return posts;
// };







import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

const rootDirectory = path.join(process.cwd(), 'app', 'content');

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex, rehypePrettyCode],
    },
  });
  console.log(content);
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
