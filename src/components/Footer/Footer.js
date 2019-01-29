import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa/";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="main" id="contact">
        <div className="container">
          <div className="item">
            <h2>Social Media</h2>
            <br />
            <div className="socialgroup">
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
              <a href="https://www.github.com/pcollinsTech/" taarget="__blank" className="social">
                <span className="iconSocial">
                  <FaGithub />
                </span>
              </a>
            </div>

            <div className="contactinfo">
              <h2>Contact Information</h2>
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
            <h2>Get in Touch</h2>
            <div className="contactForm">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netify-honeypot="bot-field"
              >
                <label>
                  Name:
                  <input name="name" type="text" />
                </label>
                <label>
                  Email:
                  <input name="email" type="email" />
                </label>
                <label>
                  Message:
                  <textarea name="message" cols="40" rows="7" />
                </label>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
        <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .contactinfo {
          padding-top: 30px;
          margin-bottom: 50px;
        }
        footer {
          padding-bottom: 4em;
        }
        hr {
          margin: 10px;
          color: ${theme.color.brand.secondary};
        }
        .main {
          background: ${theme.color.brand.primary};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
        }
        .socialgroup {
          .padding-top: 60px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .contactForm {
          padding-top: 22px;
          button {
            margin: 10px 5px 10px 0;
            padding: 8px 13px;
            border-radius: 5px;
            border: none;
            font-size: 20px;
            float: right;
          }
          button:hover {
            cursor: pointer;
            background-color: ${theme.color.brand.secondary};
          }
          textarea,
          input {
            width: 100%;
            margin: 10px 5px 10px 0;
            padding: 8px 5px;
            border: none;
            border-radius: 5px;
          }
        }
        h2 {
          text-align: center;
          font-size: 30px;
        }
        .item {
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
          margin: 0 auto;
          padding-bottom: 65px;
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
            margin-top: 80px;
            margin-bottom: 0px;
          }
          .container {
            display: flex;
            justify-content: space-around;
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
