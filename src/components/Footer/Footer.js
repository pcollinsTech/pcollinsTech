import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa/";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="item">
            <h2>Contact</h2>
            <br />
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netify-honeypot="bot-field"
            >
              <input name="name" paceholder="Your name.." type="text"/>
              <input name="email" placeholder="Your email.." type="email"/>
              <textarea name="message" placeholder="Your message.." cols="30" rows="10"></textarea>
              <button>Send</button>
            </form>
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
          <div className="item">
            <h2>Social</h2>
            <br />

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
            <a href="https://www.twitter.com/pcollins.tech/" taarget="__blank" className="social">
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
        </div>
        <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          background: ${theme.color.brand.primary};
          padding: ${theme.space.inset.default};
          text-align: center;
          color: ${theme.color.neutral.gray.g};
        }
        h2 {
          font-size: 30px;
        }
        .item {
          p {
            font-size: 16px;
          }
          a {
            text-decoration: none;
          }
        }
        .icon {
          font-size: 18px;
          padding: 20px 10px 20px 0;
        }
        .iconSocial {
          font-size: 20px;
          padding: 20px 5px 20px 0;
        }
        a:hover {
          color: ${theme.color.brand.secondary};
        }
        .container {
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding-bottom: 2em;
          max-width: ${theme.text.maxWidth.homepage};
          .item {
            text-align: left;
            width: 390px;
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
          .item p {
            font-size: 20px;
          }
          .icon {
            font-size: 25px;
            padding: 30px 20px 30px 0;
          }
          .iconSocial {
            font-size: 35px;
            padding: 20px 20px 20px 0;
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
