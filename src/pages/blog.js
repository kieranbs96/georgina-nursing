import React from 'react';
import Link from 'gatsby-link';

const Blog = () => (
  <div className="blog">
    <h1>Blog</h1>
    <div className="blog__article-preview">
      <h2 className="blog__article-title">Article of the Month</h2>
      <Link to="/blog/04-03-2018/">Click Here...</Link>
    </div>
  </div>
);

export default Blog;
