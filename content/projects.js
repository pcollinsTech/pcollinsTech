import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../src/layouts";
import Portfolio from "../src/components/Portfolio";
import Seo from "../src/components/Seo";


class ProjectPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        projects: { edges: projects = [] },
        
      }
    } = this.props;


    return <React.Fragment>
        
        <div className="gap" />
          <h2>Projects I've worked on.</h2>
          <p>Here are just a tiny number of the many interesting projects I’ve worked on</p>
        <ThemeContext.Consumer>
        {theme => <Portfolio projects={projects} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo />

        <style jsx>{`
          #container {
            margin: 0 auto;
          }
          .gap {
            margin: 130px;
          }
          h2, p {
            text-align: center;
            margin-bottom: 20px;
          }
          hr {
            margin: 0;
            border: 0;
          }`}</style>
      </React.Fragment>;
  }
}

ProjectPage.propTypes = {
//   data: PropTypes.object.isRequired
};

export default ProjectPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ProjectQuery {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//projects/[0-9]+.*--/" } }
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
    
    
  }
`;

//hero-background
    // site {
    //   siteMetadata {
    //     facebook {
    //       appId
    //     }
    //   }
    // }