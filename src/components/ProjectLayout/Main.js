import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image'
import Bodytext from "./Bodytext";
import Headline from "./Headline";
import Meta from "./Meta";
import WorkTogetherFooter from "./WorkTogetherFooter"
import laptop from "../../images/png/theme-laptop-full.png";


const Main = props => {  
  console.log("Main.js",props)
  const {
    theme,
    project: {
      html,
      frontmatter: {
        url,
        title,
        category,
        screen: {
          children: [{ fluid }]
        }
      }
    }
  } = props;
  return (
    <React.Fragment>
      <section className={`content`}>
        <Headline title={title} theme={theme} />
        <Meta category={category} theme={theme} />
        <div className="container">
          <div className="frame">
            <Img fluid={fluid} />
          </div>
          <div className="text">
            <Bodytext html={html} theme={theme} />
          </div>
        </div>
        <div className="footer">
          <WorkTogetherFooter theme={theme} />
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .container {
          padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .frame {
          flex: 2;
        }

        .footer {
          padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
        }
        @from-width tablet {
          .content {
            padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
          }
        }
        @from-width desktop {
          .frame {
            flex: 2;
            max-width: 60%;
            padding: 80px 100px 100px;
          }

          .text {
            margin: 50px;
            flex: 1;
          }
          .content {
            padding: ${`calc(${theme.space.default} * 2 + 90px) 0 calc(${
              theme.space.default
            } * 2)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default Main;
