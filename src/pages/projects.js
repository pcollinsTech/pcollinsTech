import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Projects from "../components/Projects";
import Seo from "../components/Seo";


class ProjectPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      location,
      data: {
        projects: { edges: projects = [] },
      }
    } = this.props;

    return <React.Fragment>
        <div className="blue">
        
          <div className="gap" />
            
          <ThemeContext.Consumer>
          {theme => <Projects projects={projects} theme={theme} location={location}/>}
          </ThemeContext.Consumer>

          <Seo />
        </div>

        <style jsx>{`
          #container {
            margin: 0 auto;
          }
          .gap {
            margin: 80px;
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
  data: PropTypes.object.isRequired
};

export default ProjectPage;

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