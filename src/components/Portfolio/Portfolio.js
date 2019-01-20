import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Portfolio = props => {
  const { projects, theme } = props;
  
  return (
    <React.Fragment>
      <main className="main">
        <div>
          {projects.map(project => {
            
            const {
              node,
              node: {
                fields: { slug }
              }
            } = project;
            return <Item key={slug} project={node} theme={theme} />;
          })}
        </div>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        div {
          display:flex;
          flex-wrap:wrap;
          justify-content: space-around;
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          div {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          div {
            max-width: ${theme.text.maxWidth.homepage};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Portfolio.propTypes = {
  projects: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Portfolio;
