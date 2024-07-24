import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { getPostBySlug } from '../../lib/index';
import CustomButton from '@/components/CustomButton/CustomButton';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../../mdx-components'; /// 
import 'highlight.js/styles/github-dark.css'



const getPageContent = async (slug) => {
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
    <Box sx={{ padding: { xs: '1rem', md: '8vw' } }} className="py-24">
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

      <article className="prose lg:prose-xl">{content}</article>

   
      
      <Box mt={4} display="flex" justifyContent="space-between">
        {meta.before && (
          <Link href={meta.before} passHref>
            {/* <Button variant="contained" color="primary">Before</Button> */}
            <CustomButton buttonLabel={'Previous ' + meta.before }  filledIn light>Previous</CustomButton>

          </Link>
        )}
        {meta.next && (
          <Link href={meta.next} passHref>
            <CustomButton buttonLabel={'Next ' + meta.next } filledIn light>Next {meta.next}</CustomButton>
          </Link>
        )}
        
      </Box>
    </Box>
  );
};

export default Page;



