import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { getPostBySlug } from '../../lib/index';
import CustomButton from '@/components/CustomButton/CustomButton';

import mdxComponents from '../../../mdx-components'; /// 

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
    <section className="py-24 px-[15%]">
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
        {console.log(content +'BREAAKKKK')}
      {/* <article className="prose lg:prose-xl">{content}</article> */}
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
    </section>
  );
};

export default Page;




// import { Typography, Box } from '@mui/material';
// import Link from 'next/link';
// import CustomButton from '@/components/CustomButton/CustomButton';
// import Image from 'next/image';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import { getPostBySlug } from '../../lib/index';

// // Import the plugins
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypePrettyCode from 'rehype-pretty-code';

// // Define your MDX components here
// const components = {
//   img: (props) => <Image {...props} alt={props.alt} />,
//   // ... other custom components
// };

// const getPageContent = async (slug) => {
//   const { meta, content } = await getPostBySlug(slug);
//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       remarkPlugins: [remarkGfm, remarkMath],
//       rehypePlugins: [rehypeKatex, rehypePrettyCode],
//     },
//   });
//   return { meta, content: mdxSource };
// };

// export async function generateMetadata({ params }) {
//   const { meta } = await getPageContent(params.slug);
//   return { title: meta.title };
// }

// const Page = async ({ params }) => {
//   const { meta, content } = await getPageContent(params.slug);

//   return (
//     <section className="py-24 px-[15%]">
//       <Box mb={4}>
//         <Typography variant="h1" component="h1" sx={{ color: 'black' }}>
//           {meta.title}
//         </Typography>
//         <Typography variant="body1" sx={{ color: 'grey.600' }}>
//           {new Date(meta.date).toLocaleDateString()} | {meta.category}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'grey.800', mt: 2 }}>
//           {meta.description}
//         </Typography>
//       </Box>
//       <article className="prose lg:prose-xl">
//         <MDXRemote {...content} components={components} />
//       </article>
//       <Box mt={4} display="flex" justifyContent="space-between">
//         {meta.before && (
//           <Link href={meta.before} passHref>
//             <CustomButton buttonLabel={'Previous ' + meta.before} filledIn light>
//               Previous
//             </CustomButton>
//           </Link>
//         )}
//         {meta.next && (
//           <Link href={meta.next} passHref>
//             <CustomButton buttonLabel={'Next ' + meta.next} filledIn light>
//               Next {meta.next}
//             </CustomButton>
//           </Link>
//         )}
//       </Box>
//     </section>
//   );
// };

// export default Page;




// import { Typography, Box } from '@mui/material';
// import Link from 'next/link';
// import CustomButton from '@/components/CustomButton/CustomButton';
// import { getPostBySlug } from '../../lib/index';
// import mdxComponents from '../../../mdx-components';

// const getPageContent = async (slug) => {
//   const { meta, content: MDXContent } = await getPostBySlug(slug);
//   return { meta, MDXContent };
// };

// export async function generateMetadata({ params }) {
//   const { meta } = await getPageContent(params.slug);
//   return { title: meta.title };
// }

// const Page = async ({ params }) => {
//   const { meta, MDXContent } = await getPageContent(params.slug);

//   return (
//     <section className="py-24 px-[15%]">
//       <Box mb={4}>
//         <Typography variant="h1" component="h1" sx={{ color: 'black' }}>
//           {meta.title}
//         </Typography>
//         <Typography variant="body1" sx={{ color: 'grey.600' }}>
//           {new Date(meta.date).toLocaleDateString()} | {meta.category}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'grey.800', mt: 2 }}>
//           {meta.description}
//         </Typography>
//       </Box>
//       <article className="prose lg:prose-xl">
//         <MDXContent components={mdxComponents} />
//       </article>
//       <Box mt={4} display="flex" justifyContent="space-between">
//         {meta.before && (
//           <Link href={meta.before} passHref>
//             <CustomButton buttonLabel={'Previous ' + meta.before} filledIn light>
//               Previous
//             </CustomButton>
//           </Link>
//         )}
//         {meta.next && (
//           <Link href={meta.next} passHref>
//             <CustomButton buttonLabel={'Next ' + meta.next} filledIn light>
//               Next {meta.next}
//             </CustomButton>
//           </Link>
//         )}
//       </Box>
//     </section>
//   );
// };

// export default Page;
