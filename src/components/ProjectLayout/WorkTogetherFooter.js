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
                If you like my work and want to work together on your next project, get in
                touch bellow!
              </p>
              
            </div>
          </div>
        </div>

        {/* --- STYLES --- */}
        <style jsx>{`
          .container {
            margin: 0 auto;
            align-content: center;
            padding: 0 3em;
          }
          .row {
            margin: 0 auto;
            display: flex;
            margin-top: 2em;
            width: 600px;
          }
          h2 {
            font-size: 2rem;
            color: ${theme.color.brand.primary};
            padding-bottom: 1rem;
          }
          .contact {
            width: 90%;
          }
          .avatar {
            float: left;
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
