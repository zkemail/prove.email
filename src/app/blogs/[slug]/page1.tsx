import { getPostBySlug } from "@/lib";
import "highlight.js/styles/github-dark.css";
import PostContent from "./postContent";
import { Meta, Metadata, PageContent, Params } from "@/app/types";

const getPageContent = async (slug: string): Promise<PageContent> => {
  const { meta, content }: PageContent = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { meta }: { meta: Meta } = await getPageContent(params.slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage
            ? `https://prove.email${meta.ogImage}`
            : `https://prove.email/blog-media/default/zk-email-default-banner.webp`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { meta, content } = await getPageContent(params.slug);

  return (
    <div className="container-width container-padding m-auto my-40">
      <PostContent meta={meta} content={content} />
    </div>
  );
}
