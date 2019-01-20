import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import NextPrev from "./NextPrev";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module.default;
    })
    .catch(error => {
      console.log("Project.Share error:", error)
    })
);

const Project = props => {
  const {
    project,
    project: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, category }
    },
    next: nextProject,
    prev: prevProject,
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta prefix={prefix} category={category} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <NextPrev next={nextProject} prev={prevProject} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Project;
