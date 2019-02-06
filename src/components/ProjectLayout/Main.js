import React from "react";
import PropTypes from "prop-types";
import { ScreenWidthContext } from "../../layouts";

import Iframe from "./Iframe";
import Bodytext from "./Bodytext";
import Headline from "./Headline";
import Meta from "./Meta";
import WorkTogetherFooter from "./WorkTogetherFooter"


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
      }
    }
   } = props;
  return (
    <React.Fragment>
      <section className={`content`}>
        <Headline title={title} theme={theme} />
        <Meta category={category} theme={theme} />
        <div className="container">
          {/* <ScreenWidthContext.Consumer> */}
            {/* {width => {
              width > 1024 ? (
                ""
              ) : (
              );
            }} */}
                <div className="frame">
                  <Iframe project={url} theme={theme} />
                </div>
          {/* </ScreenWidthContext.Consumer> */}

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
        .footer {
          padding: ${theme.space.inset.default};
        }
        .content {
          margin: 0 auto;
        }
        .text {
          padding: ${theme.space.inset.default};
        }
        .container {
          display: flex;
        }
        @from-width tablet {
          .frame {
            display: none;
          }
          .content {
            padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
          }
        }
        @from-width desktop {
          .frame {
            flex: 2;
            margin-left: -11%;
            display: block;
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
