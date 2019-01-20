import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

import codeBrand from "../../images/png/codeBrand.png";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  return <React.Fragment>
      <header className="header">
        <Headline title={title} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      <style jsx>{`
      .header {
        text-align:center;
      }
       `}</style>
    </React.Fragment>;
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
