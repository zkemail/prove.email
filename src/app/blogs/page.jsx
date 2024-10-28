import { getAllPostsMeta } from "../../lib/index";
import BlogsPage from "./PostContainer";


const Blogs = async () => {
  const posts = await getAllPostsMeta();

  return <BlogsPage posts={posts} />;
};

export default Blogs;
