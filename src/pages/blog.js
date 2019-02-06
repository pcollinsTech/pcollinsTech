import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Seo from "../components/Seo";


class BlogPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        
        
      }
    } = this.props;


    return <React.Fragment>
        
        <div className="gap" />

        <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo />

        <style jsx>{`
          #container {
            margin: 0 auto;
          }
          .gap {
            margin: 130px;
          }
          hr {
            margin: 0;
            border: 0;
          }`}</style>
      </React.Fragment>;
  }
}

BlogPage.propTypes = {
//   data: PropTypes.object.isRequired
};

export default BlogPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    
  }
`;

//hero-background
