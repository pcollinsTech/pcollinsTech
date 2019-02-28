import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Services from "../components/Services";
import Project from "../components/Projects/Project";


class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  render() {
    const {
      location,
      data: {
        posts: { edges: posts = [] },
        projects: { edges: projects = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
      }
    } = this.props;
    const trimedPosts = posts.slice(0, 3);

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero
              scrollToContent={this.scrollToContent}
              backgrounds={backgrounds}
              theme={theme}
            />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => <Services theme={theme} />}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
        {theme => <Project theme={theme} projects={projects} location={location}/>}
        </ThemeContext.Consumer>
        
        <ThemeContext.Consumer>
        {theme => <Blog posts={trimedPosts} theme={theme} />}
            
        </ThemeContext.Consumer>

        <Seo />

        <style jsx>{`
          #container {
            margin: 0 auto;
          }
          hr {
            margin: 0;
            border: 0;
          }`}</style>
      </React.Fragment>;
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
         query IndexQuery {
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
           projects: allMarkdownRemark(
             filter: { fileAbsolutePath: { regex: "//projects/[0-9]+.*--/" } }
             sort: { fields: [fields___prefix], order: DESC }
           ) {
             edges {
               node {
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
           bgDesktop: imageSharp(fluid: { originalName: { regex: "/background/" } }) {
             resize(width: 1200, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           bgTablet: imageSharp(fluid: { originalName: { regex: "/background/" } }) {
             resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           bgMobile: imageSharp(fluid: { originalName: { regex: "/background/" } }) {
             resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           waxHiveWraps: imageSharp(fluid: { originalName: { regex: "/wax-hive-wraps/" } }) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           digitalWorksAgency: imageSharp(
             fluid: { originalName: { regex: "/digital-works-agency/" } }
           ) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           balincourt: imageSharp(fluid: { originalName: { regex: "/balincourt/" } }) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           eiProjects: imageSharp(fluid: { originalName: { regex: "/ei-projects/" } }) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           tooGoodToBe: imageSharp(fluid: { originalName: { regex: "/too-good-to-be/" } }) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
           stJamesStudio: imageSharp(
             fluid: { originalName: { regex: "/st-james-studio/" } }
           ) {
             resize(width: 650, height: 400, quality: 90, cropFocus: CENTER) {
               src
             }
           }
         }
       `;

//background
// site {
//   siteMetadata {
//     facebook {
//       appId
//     }
//   }
// }