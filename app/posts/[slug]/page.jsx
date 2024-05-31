// import { Typography } from '@mui/material'
// import { getPostBySlug } from '../../lib/index'

// const getPageContent = async slug => {
//   const { meta, content } = await getPostBySlug(slug)
//   return { meta, content }
// }

// export async function generateMetadata({ params }) {
//   const { meta } = await getPageContent(params.slug)
//   return { title: meta.title }
// }

// const Page = async ({ params }) => {
//   const { content } = await getPageContent(params.slug)

//   return (
//     <section className='py-24 px-[15%]'>
//       <Typography sx={{color:'black'}}>  </Typography>
//       <article className='prose lg:prose-xl'>{content}</article>
//     </section>
//   )
// }

// export default Page


import { Typography, Box } from '@mui/material';
import { getPostBySlug } from '../../lib/index';

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }) => {
  const { meta, content } = await getPageContent(params.slug);

  return (
    <section className='py-24 px-[15%]'>
      <Box mb={4}>
        <Typography variant="h1" component="h1" sx={{ color: 'black' }}>
          {meta.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.600' }}>
          {new Date(meta.date).toLocaleDateString()} | {meta.category}
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.800', mt: 2 }}>
          {meta.description}
        </Typography>
      </Box>
      <article className='prose lg:prose-xl'>{content}</article>
    </section>
  );
};

export default Page;
