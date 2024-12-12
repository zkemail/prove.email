import { getAllPostsMeta } from "../../lib/index";
import BlogsPage from "./PostContainer";

export const metadata = {
  title: "ZK Email | Blogs",
};

const Blogs = async () => {
  const posts = await getAllPostsMeta();

  return <BlogsPage posts={posts} />;
};

export default Blogs;
