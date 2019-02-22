import React from "react";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";

const WorkTogetherFooter = ({theme}) => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="avatar">
              <img
                src={config.gravatarImgMd5 == "" ? avatar : config.gravatarImgMd5}
                alt={config.siteTitle}
              />
            </div>
            <div className="contact">
              <h2>Let's Work Together</h2>
              <p>
                If you like my work and want to work together on your next project, get in touch
                bellow!
              </p>
            </div>
          </div>
        </div>

        {/* --- STYLES --- */}
        <style jsx>{`
          .container {
            margin: 0 auto;
            align-content: center;
            padding: 0 1.9em;
          }
          .row {
            margin: 0 auto;
            display: flex;
            margin-top: 2em;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          h2 {
            font-size: 2rem;
            color: ${theme.color.brand.primary};
            padding-bottom: 1rem;
          }
          .contact {
            text-align: center;
            min-width: 310px;
          }
          .avatar {
            border-radius: 65% 75%;
            display: inline-block;
            height: 90px;
            margin: 5px 20px 0 0;
            overflow: hidden;
            width: 90px;
          }
          .avatar img {
            width: 100%;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    );
};

export default WorkTogetherFooter;
