'use client'

import { Typography, Box, Button, useTheme } from '@mui/material';
import Link from 'next/link';
import { getPostBySlug } from '../../lib/index';
import CustomButton from '@/components/CustomButton/CustomButton';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../../mdx-components'; /// 
import 'highlight.js/styles/github-dark.css'


const PostContent = ({ meta, content }) => {
    const theme = useTheme()
    console.log(meta)

    return <Box sx={{ padding: { xs: '1rem', md: '8vw', background: theme.palette.background.default } }} className="py-24">
        <Box mb={4}>
            <Typography variant="h1" component="h1">
                {meta.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.500' }}>
                {new Date(meta.date).toLocaleDateString()} | {meta.category}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.mode === 'light' ? 'grey.800' : 'grey.200', mt: 2 }}>
                {meta.description}
            </Typography>
        </Box>

        <article className={`prose lg:prose-xl ${theme.palette.mode === 'dark' ? 'prose-invert dark:prose-invert-xl' : ''}`}>{content}</article>
    </Box>
}

export default PostContent