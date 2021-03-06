import React from "react";
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa/";


const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <div className="text">
          <h1>
            <span className="name">PHIL COLLINS</span>
            <br />
            Software Developer
          </h1>
          <br
            style={{
              margin: "10px 0"
            }}
          />
          {/* <img src={logoWhite} alt={config.siteTitle}/> */}
          <h2>
            Creating <span>awesome</span> web experiences for the next generation of
            consumer-facing companies.
          </h2>
        </div>
        <div className="arrow">
          <button onClick={scrollToContent} aria-label="scroll">
            <FaArrowDown />
          </button>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .name {
          font-size: 55px;
        }
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }
        .text {
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          align-items: center;
        }
        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }
        h2 {
          text-align: center;
          color: #fff;
          padding: 0 0 30px 0;
          font-size: 1.5em;
          line-height: ${theme.hero.h1.lineHeight};
          transform-origin: 50% 50% 0;
          transform: translate3d(0, 0, 0);
          span {
            font-size: 30px;
          }
        }

        button {
          background: ${theme.background.color.brand};

          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;

            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            margin-bottom: -250px;
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
