import React from 'react';
import Link from 'gatsby-link';

import BlogPreviewOne from '../components/BlogPreviewOne';
import ABS from '../components/ABS';
import DepoliticiseNHS from '../components/DepoliticiseNHS';

const Blog = () => (
  <div className="blog">
    <h1>Blog</h1>
    <div className="blog__article-list">
      <DepoliticiseNHS />
      <ABS />
      <BlogPreviewOne />
    </div>
  </div>
);

export default Blog;
