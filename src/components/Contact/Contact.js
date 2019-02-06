import React from "react";
import PropTypes from "prop-types";

const Contact = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="main" id="contact">
        <div className="container">
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

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          background: ${theme.color.brand.primary};
          padding: 70px 50px;
          color: ${theme.color.neutral.gray.g};
        }

        .contactForm {
          padding-top: 22px;
          button {
            margin: 10px 5px 10px 0;
            padding: 8px 13px;
            border-radius: ${theme.size.radius.default};
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
            font-size: 20px;
            width: 100%;
            margin: 10px 5px 10px 0;
            padding: 8px 5px;
            border: none;
            border-radius: ${theme.size.radius.default};
          }
        }
        h2 {
          text-align: center;
          font-size: 30px;
        }
        a:hover {
          color: ${theme.color.brand.secondary};
        }
        .container {
          margin: 0 auto;
          padding-bottom: 65px;
          max-width: ${theme.text.maxWidth.homepage};
        }
      `}</style>
    </React.Fragment>
  );
};

Contact.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Contact;
