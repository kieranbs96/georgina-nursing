import React from 'react';
import rehypeReact from 'rehype-react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'react-collapsible': Collapsible, 'react-link': Link },
}).Compiler;

export default function Template({ data }) {
  const { markdownRemark: content } = data;

  return (
    <div>
      <h1>{content.frontmatter.title}</h1>
      {renderAst(content.htmlAst)}
    </div>
  );
}

export const contentQuery = graphql`
  query ContentByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
    }
  }
`;
