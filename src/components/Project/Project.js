import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Iframe from "./Iframe";
import WorkTogetherFooter from "../WorkTogetherFooter";



const Project = props => {

  const {
    project,
    project: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, category, url }
    },
    theme
  } = props;
  
  return (
    <React.Fragment>
      <div >
        <header>
          <Headline title={title} theme={theme} />
          <Meta prefix={prefix} category={category} theme={theme} />
        </header>
        <Iframe project={url} />
        <Bodytext html={html} theme={theme} />
        <hr />
        <footer>
          <WorkTogetherFooter theme={theme} />
        </footer>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
      `}</style>
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
