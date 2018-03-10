import React from 'react';
import Link from 'gatsby-link';

import BlogPreviewOne from '../components/BlogPreviewOne';

const Blog = () => (
  <div className="blog">
    <h1>Blog</h1>
    <div className="blog__article-list">
      <BlogPreviewOne />
    </div>
  </div>
);

export default Blog;
