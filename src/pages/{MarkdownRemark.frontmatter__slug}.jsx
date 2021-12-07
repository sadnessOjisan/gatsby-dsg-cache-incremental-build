import React from "react";
import { graphql } from "gatsby";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const timestr = new Date().toISOString();
  console.log("timestr: ", timestr);
  return (
    <div className="blog-post-container">
      build time: {timestr}
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export async function config() {
  return (props) => {
    console.log(JSON.stringify(props));
    return {
      defer: props.params.frontmatter__slug === "hoge",
    };
  };
}

export async function getServerData(context) {
  return {
    status: 200, // The HTTP status code that should be returned
    props: {}, // Will be passed to the page component as "serverData" prop
    headers: {
      "Cache-Control": "max-age=10000",
    }, // HTTP response headers for this page
  };
}
