import React from "react";
import PropTypes from "prop-types";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";

const Avatar = props => {
    const { note, theme } = props;

    return (
        <React.Fragment>
            
            <div className="avatar">
                <img
                    src={config.gravatarImgMd5 == "" ? avatar : config.gravatarImgMd5}
                    alt={config.siteTitle}
                />
            </div>
            

        {/* --- STYLES --- */}
        <style jsx>{`
        
        .avatar {
          float: left;
          border-radius: 65% 75%;
          border: 1px solid ${theme.line.color};
          display: inline-block;
          height: 50px;
          margin: 5px 20px 0 0;
          overflow: hidden;
          width: 50px;
        }
        .avatar img {
          width: 100%;
        }
       
        }
      `}</style>
        </React.Fragment>
    );
};

Avatar.propTypes = {
    note: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
};

export default Avatar;
