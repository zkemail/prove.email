import { useState } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState();
  
  return (
    <div className="min-h-screen">
      <p className="h3">Blogposts</p>
      <p className="sutitle1">Latest blogs from our team</p>
      <input></input>
    </div>
  );
};

export default Blogs;
