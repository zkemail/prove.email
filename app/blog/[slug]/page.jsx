import { getPostBySlug } from '../../lib/index';
import 'highlight.js/styles/github-dark.css'
import PostContent from './postContent'


const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage ? `https://prove.email${meta.ogImage}` : `https://prove.email/blog-media/default/zk-email-default-banner.png`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
  };
}

const Page = async ({ params }) => {
  const { meta, content } = await getPageContent(params.slug);

  return <PostContent meta={meta} content={content} />
};

export default Page;
