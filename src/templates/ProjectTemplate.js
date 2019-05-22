import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("prismjs/themes/prism-okaidia.css");

import Seo from "../components/Seo";
import ProjectLayout from "../components/ProjectLayout";
import { ThemeContext } from "../layouts";

const ProjectTemplate = props => {
  const {
    data: {
      project,
    },
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => <ProjectLayout theme={theme} project={project} />}
      </ThemeContext.Consumer>
      <Seo data={project} />
    </React.Fragment>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectTemplate;

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
        brief
        url
        cover {
          children {
            ... on ImageSharp {
              fluid(maxWidth: 800, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        screen {
          children {
            ... on ImageSharp {
              fluid(maxWidth: 2771, maxHeight: 1649) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
