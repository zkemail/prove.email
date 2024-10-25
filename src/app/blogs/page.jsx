import Link from "next/link";
import { getAllPostsMeta } from "../../lib/index";
import Image from "next/image";

const PostContainer = ({ post }) => {
  console.log(post.image)
  return (
    <Link href={`/blogs/${post.slug}`} key={post.title}>
      <div
        className="flex flex-col lg:flex-row gap-8"
        style={{ padding: 24, border: "1px solid var(--Grey-850, #272727)" }}
      >
        {/*  // TODO: Remove the default image */}
        <Image width={278} height={156} src={post.ogImage ?? "/blog-media/email-account-recovery/banner.png"} alt={post.title} className="w-full lg:w-auto" />
        <div>
          <p className="h4 font-semibold" style={{ color: '#F5F3EF' }}>{post.title}</p>
          <p className="subtitle1 mt-2">{post.description}</p>
          <p className="subtitle1 mt-7" style={{ fontSize: 12 }}>
            {new Date(post.date).toISOString().split("T")[0]} <span className="mx-2">◆</span> {post.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Blogs = async () => {
  const posts = await getAllPostsMeta();

  return (
    <div className="container-width container-padding m-auto" style={{ paddingTop: '10rem' }}>
      <div>
        <p className="h3 text-left" style={{ textAlign: 'left' }}>Blogposts</p>
        <p className="sutitle1">Latest blogs from our team</p>
      </div>

      <div className="flex flex-col gap-14 mt-20 mb-28">
        {posts.map((post) => {
          return <PostContainer key={post.slug} post={post} />;
        })}
      </div>

      {/* <FilterablePostList initialPosts={posts} /> */}
    </div>
  );
};

export default Blogs;
