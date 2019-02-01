import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import logo from "../../images/png/logo.png";
import logoWhite from "../../images/png/logoWhite.png";


class Header extends React.Component {
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { path, theme } = this.props;
    const { fixed } = this.state;

    return <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
            <ScreenWidthContext.Consumer>
                {width => (
                  
                  <img src={ width > "1024" ? logo : (path === "/")? logoWhite : logo} alt={config.siteTitle} />
                )}
              </ScreenWidthContext.Consumer>
            </div>
            <div className="type">
              <h2>{config.headerTitle}</h2>
              <h3>{config.headerSubTitle}</h3>
            </div>
          </Link>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            align-items: center;
            justify-content: center;
            background-color: ${theme.color.neutral.white};
            display: flex;
            height: ${theme.header.height.default};
            position: relative;
            top: 0;
            width: 100%;
            align-items: center;

            :global(a.logoType) {
              align-items: center;
              display: flex;
              flex-direction: "column";
              color: ${theme.text.color.primary};

              .logo {
                flex-shrink: 0;
              }
            }

            &.homepage {
              position: absolute;
              background-color: transparent;
              height: ${theme.header.height.homepage};
              .type {
                display: none;
              }
            }
          }

          h2 {
            font-size: ${theme.font.size.m};
            font-weight: ${theme.font.weight.standard};
            margin: ${theme.space.stack.xs};
          }

          h3 {
            font-weight: ${theme.font.weight.standard};
            font-size: ${theme.font.size.xs};
            letter-spacing: 0;
            margin: 0;
            color: ${theme.color.brand.primary};
          }

          .logo {
            display: inline-block;
            height: 75px;
            margin: ${theme.space.inline.default};
            overflow: hidden;
            width: 90px;
            transition: all 0.5s;

            .homepage & {
              height: 110px;
              width: 130px;
            }

            img {
              width: 80%;
            }
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
          }

          @from-width tablet {.header {
              padding: ${theme.space.inset.l};

              &.homepage {
                height: ${theme.header.height.homepage};
              }
            }}

          @below desktop {.header.homepage {
              .logo {
                border: none;
              }

              :global(a.logoType),
              h2 {
                color: ${theme.color.neutral.white};
              }
              h3 {
                color: ${theme.color.brand.primary};
              }
            }}

          @from-width desktop {.header {
              align-items: center;
              background-color: ${theme.color.brand.white};
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 0.5s;

              &.fixed {
                height: ${theme.header.height.fixed};
                background-color: ${theme.color.neutral.white};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;

                h2 {
                  margin: ${theme.space.stack.xxs};
                }

                h3 {
                  display: none;
                }
              }

              &.homepage:not(.fixed) {
                :global(a.logoType),
                h2 {
                  color: ${theme.color.neutral.white};
                }
                h3 {
                  color: ${theme.color.brand.primary};
                }
              }
            }

            .header :global(a.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }

            .logo {
              margin: ${theme.space.inline.default};
              height: 110px;
              width: 130px;

              .fixed & {
                height: 50px;
                width: 62px;
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            h3 {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }

            @keyframes h3Entry {from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }}}`}</style>
      </React.Fragment>;
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
