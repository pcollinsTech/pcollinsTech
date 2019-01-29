import PropTypes from "prop-types";
import React from "react";

import design from "../../images/png/design.png";
import hosting from "../../images/png/hosting.png";
import marketing from "../../images/png/marketing.png";
import optimised from "../../images/png/optimised.png";
import responsive from "../../images/png/responsive.png";
import seo from "../../images/png/seo.png";
// import webApp from "../../images/png/webApp.png";

const Services = props => {
    const { theme } = props;

    return <React.Fragment>
        <section className="services">
          <h2>Services</h2>
          <div className="container">
            <div className="item">
              <img src={design} />
              <h2>Design</h2>
              <p>
                Good website design is about bringing together all the elements – layout,
                structure, images and content – to create an engaging digital experience for the
                customer.
              </p>
            </div>
            <div className="item">
              <img src={hosting} />
              <h2>Hosting</h2>
              <p>
                Does your new website or webs application need a home? I can offer Domain name and hosting services
                that are reliable, affordable and secure.
              </p>
            </div>
            <div className="item">
              <img src={marketing} />
              <h2>Training</h2>
              <p>
                I offer one-to-one or group training, either in person or over Skype to help you
                with any issues you may have with getting online or optimising your website.
              </p>
            </div>
            <div className="item">
              <img src={optimised} />
              <h2>Optimised</h2>
              <p>
                The performance of your website plays a key role in whether your users decide to
                stick around or move onto your competition. Faster loading pages are great for
                SEO and deliver a better overall User Experience.
              </p>
            </div>
            <div className="item">
              <img src={responsive} />
              <h2>Responsive Design</h2>
              <p>
                All of my recent websites are responsive. This means that the layout changes and
                adapts according to the screen size of the visitor. This allows for a better
                browsing experience on mobile phones and tablets.
              </p>
            </div>
            <div className="item">
              <img src={seo} />
              <h2>Seo</h2>
              <p>
                My websites are designed to be search-engine friendly. They often
                achieve excellent rankings within a few weeks of launch. For more
                competitive markets I can recommend an SEO specialist to give you a little extra
                help.
              </p>
            </div>
          </div>
        </section>

        {/* --- STYLES --- */}
        <style jsx>{`
          .services {
            margin: 20px auto;
            text-align: center;
            h2 {
              font-size: ${theme.font.size.xxl};
            }
          }
          .container {
            text-align: center;
            margin: 0 auto;
            padding: ${theme.space.inset.default};
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
              background: white;
              border: 1px solid grey;
              border-radius: 20px;
              margin: 10px auto;
              padding: ${theme.space.default};
              max-width: 335px;
              border: 1px solid ${theme.line.color};
              box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.03);
              img {
                max-height: 130px;
                margin-bottom: 20px;
              }
              h2 {
                font-size: ${theme.font.size.l};
                margin-bottom: 5px;
              }
              p {
              }
            }
          }

          @from-width tablet {.container {
              padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
              max-width: ${theme.text.maxWidth.tablet};
            }}
          @from-width desktop {.container {
              padding: ${`calc(${theme.space.default} * 2 ) 0 calc(${theme.space.default} * 2)`};
              max-width: ${theme.text.maxWidth.homepage};
            }}`}</style>
      </React.Fragment>;
};

Services.propTypes = {
    theme: PropTypes.object.isRequired
};

export default Services;
