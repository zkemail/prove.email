import { getPostBySlug } from '../../lib/index';
import 'highlight.js/styles/github-dark.css'
import PostContent from './postContent'


const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const Page = async ({ params }) => {
  const { meta, content } = await getPageContent(params.slug);

  return <PostContent meta={meta} content={content} />
};

export default Page;
