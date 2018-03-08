import React from 'react';
import rehypeReact from 'rehype-react';
import Collapsible from 'react-collapsible';
import Helmet from 'react-helmet';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'react-collapsible': Collapsible },
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
