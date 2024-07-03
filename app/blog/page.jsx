import Link from 'next/link';
import { getAllPostsMeta } from '../lib/index';
import FilterablePostList from '../../components/FilterablePostList/FilterablePostList';



const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
      <div className='bg-white h-fit'>
        <FilterablePostList initialPosts={posts} />
      </div>
  );
};

export default Page;
