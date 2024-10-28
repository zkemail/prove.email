"use client";

import Link from "next/link";
import Image from "next/image";
import { useAnimateIn } from "../hooks/useAnimateIn";

const PostContainer = ({ post }) => {
  const [sectionStyles, sectionRef] = useAnimateIn(undefined, { delay: 0 });

  return (
    <Link href={`/blogs/${post.slug}`} key={post.title}>
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row gap-8"
        style={{
          ...sectionStyles,
          padding: 24,
          border: "1px solid var(--Grey-850, #272727)",
        }}
      >
        {/*  // TODO: Remove the default image */}
        <Image
          width={278}
          height={156}
          src={
            post.ogImage ??
            "/blog-media/email-account-recovery/webp/banner.webp"
          }
          alt={post.title}
          className="w-full lg:w-auto"
        />
        <div>
          <p className="h4 font-semibold" style={{ color: "#F5F3EF" }}>
            {post.title}
          </p>
          <p className="subtitle1 mt-2">{post.description}</p>
          <p className="subtitle1 mt-7" style={{ fontSize: 12 }}>
            {new Date(post.date).toISOString().split("T")[0]}{" "}
            <span className="mx-2">◆</span> {post.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

const BlogsPage = ({ posts }: any) => {
  const [sectionStyles, sectionRef] = useAnimateIn(undefined, { delay: 0 });
  return (
    <div
      ref={sectionRef}
      className="container-width container-padding m-auto"
      style={{ paddingTop: "10rem", ...sectionStyles }}
    >
      <div>
        <p className="h3 text-left" style={{ textAlign: "left" }}>
          Blogposts
        </p>
        <p className="sutitle1">Latest blogs from our team</p>
      </div>

      <div className="flex flex-col gap-14 mt-20 mb-28">
        {posts.map((post) => {
          return <PostContainer key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
