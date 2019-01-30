import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa/";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="main" >
        <div className="container">
          <div className="item">
            <div className="contactinfo">
              <br />
              <p>
                <a href="mailto:phil@pcollins.tech" taarget="__blank">
                  <span className="icon">
                    <FaEnvelope />
                  </span>
                  phil@pcollins.tech
                </a>
              </p>
              <p>
                <a href="tel:07944305605" taarget="__blank">
                  <span className="icon">
                    <FaPhone />
                  </span>
                  07944305605
                </a>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="socialgroup">
              <div className="socialIcons">
                <a
                  href="https://www.facebook.com/pcollins.tech/"
                  taarget="__blank"
                  className="social"
                >
                  <span className="iconSocial">
                    <FaFacebook />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/pcollins.tech/"
                  taarget="__blank"
                  className="social"
                >
                  <span className="iconSocial">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  href="https://www.twitter.com/pcollins.tech/"
                  taarget="__blank"
                  className="social"
                >
                  <span className="iconSocial">
                    <FaTwitter />
                  </span>
                </a>
                <a
                  href="https://www.github.com/pcollinsTech/"
                  taarget="__blank"
                  className="social"
                >
                  <span className="iconSocial">
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .contactinfo {
          margin-bottom: 50px;
        }
        footer {
          padding-bottom: 4em;
        }

        .main {
          background: ${theme.color.brand.primary};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
        }
        .socialgroup {
          width:100%;
          margin-top: 50px;
          .socialIcons{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            float: right;
          }
        }
        .item {
          position: relative;
          p {
            font-size: 22px;
          }
          a {
            text-decoration: none;
          }
        }
        .icon {
          font-size: 25px;
          padding: 30px 20px 30px 0;
        }
        .iconSocial {
          font-size: 35px;
          padding: 20px 20px 20px 0;
        }
        a:hover {
          color: ${theme.color.brand.secondary};
        }
        .container {
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          padding-bottom: 35px;
          max-width: ${theme.text.maxWidth.homepage};
          .item {
            text-align: left;
            padding: 0 20px;
          }
        }
        .footer {
          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding: 1em 1em 0 1em;
          }
          .contactinfo {
            margin-bottom: 0px;
          }
          .container {
            .item {
              width: 40%;
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
