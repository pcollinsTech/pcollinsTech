import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("prismjs/themes/prism-okaidia.css");

import Seo from "../components/Seo";
import Article from "../components/Article";
import Project from "../components/Project";
import { ThemeContext } from "../layouts";

const ProjectTemplate = props => {
  const {
    data: {
      project,
      site: {
        siteMetadata: { facebook }
      }
    },
    // projectContext: { next, prev }
  } = props;

  
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Project
              project={project}
              // next={next}
              // prev={prev}
              // facebook={facebook}
              theme={theme}
            />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo data={project}  />
    </React.Fragment>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  // projectContext: PropTypes.object.isRequired
};

export default ProjectTemplate;

//eslint-disable-next-line no-undef
export const projectQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        category
        cover {
          childImageSharp {
            resize(width: 300) {
              src
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
