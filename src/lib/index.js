"use server";

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const rootDirectory = path.join(
  process.cwd(),
  "src",
  "app",
  "content",
  "blogsContent"
);

/* For selected blog gets all the content for that blog post*/
export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // problem with remarkGfm?
        remarkPlugins: [remarkMath, remarkGfm],
        // remarkPlugins: [ remarkMath],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypeKatex, { output: "mathml" }],
          rehypePrettyCode,
        ],
      },
    },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

/* For blog page gets all the blog posts meta data */
export const getAllPostsMeta = async () => {
  console.log(rootDirectory)
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
