import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { FaHandshake } from "react-icons/fa";

const CharityPage = () => {

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Article theme={theme}>
              <header>
                <Headline title="Charity Work" theme={theme} />
              </header>
              <section className="charity">
                <div className="container">
                  <p className="paragraph">
                    Hello! If you are new to this, then "Charity Tuesday" is an initiative of
                    mine where I offer my skills and services to charities or non-profit
                    organisations in and around Poole / Bounemouth. I do this on the first
                    Tuesday of every month.
                  </p>
                  <h3>What is it?</h3>
                  <p className="paragraph">
                    The charities I work for will have my skills and expertise, in house for 8
                    hours. I’ll advise, critique and generally help out with Web Design, Web
                    Development, SEO and all things digital.
                  </p>
                  <p className="paragraph">
                    I am looking for new charities to work with in 2019, and help them with
                    their online presence. If you work for a charity, or know someone who does,
                    please get in touch.
                  </p>
                  <h3>Why am I doing it?</h3>
                  <p className="paragraph">
                    I want to show smaller charities that they need to embrace digital
                    technologies – whether it be responsive web design, mobile apps, or simply
                    keeping a blog up to date. Lots of charities, for instance, want to know how
                    to get their site ranking higher on Google or need to know how they can
                    improve their social media range. I’ll cover a little bit of everything.
                  </p>

                  <p className="paragraph">
                    If you’d like to make use of my skills on a Tuesday, then please contact me
                    as soon as possible and I’ll check my diary for the next available Tuesday.
                  </p>
                 
                </div>
              </section>
            </Article>
          )}
        </ThemeContext.Consumer>
        <ThemeContext.Consumer>
          {theme => (
            <style jsx="true">{`
              img {
                margin: 0 10px 0px 10px;
              }
              .conatainer {
                margin: 0 auto;
              }
              .intro {
                text-align: center;
              }
              .avatar {
                max-height: 90px;
                max-width: 90px;
                border: 2px solid ${theme.color.brand.primary};
                border-radius: 50%;
              }
              .paragraph {
                margin: 20px;
              }
              @from-width desktop {
                .charity {
                  margin-bottom: 60px;
                }
                .avatar {
                  max-height: 160px;
                  max-width: 160px;
                  border: 2px solid ${theme.color.brand.primary};
                  border-radius: 50%;
                }
              }
            `}</style>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
};


export default CharityPage;

