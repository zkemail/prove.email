import { getPostBySlug } from '../../lib/index'

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <section className='py-24 px-[15%]'>
      <article className='prose lg:prose-xl'>{content}</article>
    </section>
  )
}

export default Page