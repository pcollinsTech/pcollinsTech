import React from "react";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";

const WorkTogetherFooter = ({theme}) => {
    return (
      <React.Fragment>
          <div className="container">
          
            <div className="avatar">
                <img
                    src={config.gravatarImgMd5 == "" ? avatar : config.gravatarImgMd5}
                    alt={config.siteTitle}
                />
            </div>
            <div className="contact">
                <h2>Let's Work Together</h2>
                <p>If you like my work and want to work together on your next project, get in touch! </p>
                <br/>
                <p>Mobile:<a href="tel:07944305605">07944305605</a></p>
                <p>Email:<a href="mailto:phil@pcollins.tech">phil@pcollins.tech</a></p>
            </div>
          </div>

        {/* --- STYLES --- */}
        <style jsx>{`
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top:1.5rem;
        }
        h2 {
           font-size: 2rem;
           color: ${theme.color.brand.secondary};
           padding-bottom: 1rem;
        }
        .contact {
            width:90%;
        }
        .avatar {
          float: left;
          border-radius: 65% 75%;
          display: inline-block;
          height: 50px;
          margin: 5px 20px 0 0;
          overflow: hidden;
          width: 50px;
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
