import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import avatar from "../images/jpg/avatar.jpg";
import flip from "../images/jpg/flip.jpg";
import fire from "../images/jpg/fire.jpg";
import Seo from "../components/Seo";

const AboutPage = props => {
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="About" theme={theme} />
            </header>
            <section className="about">
              <div className="container">
                <div className="intro">
                  <img src={flip} className="avatar" />
                  <img src={avatar} className="avatar" />
                  <img src={fire} className="avatar" />
                </div>
                <p className="aboutParagraph">
                  I work mostly in Belfast, whilst hopping to and from England. Before I started out
                  building websites, chatbots and apps, I was working as a chef in the french alps.
                </p>
                <p className="aboutParagraph">
                  Yep, you read that right. A pretty huge career change, but i pulled it off. I was
                  cooking fine dishes by day, and learning to code and build sites initially for
                  friends and colleagues by night. Having taken all of those learnings from the
                  mountains, I packed the snowboard up, swapped my chef knives for coding tools and
                  headed to Bournemouth where I had been living for a number of years. I've now
                  recently moved back to my home town, Belfast.
                </p>
                <p className="aboutParagraph">
                  Since I left working in the mountains, I have collaborated with some of
                  Bournemouth’s most exciting start-ups, agencies and studios. In doing so, I have
                  been fortunate enough to work next to some of the brightest tech minds the South
                  of England has to offer, and i like to think some of their brilliance has rubbed
                  off on me too.
                </p>

                <p className="aboutParagraph">
                  My long running ambition is that I have always wanted to go out on my own and work
                  with a number of SME’s to help them bring to life their digital projects, websites
                  and conversational chatbots that help them to stand out amongst the bigger brands.
                </p>

                <p className="aboutParagraph">
                  Creative flair is something I have long since held, having worked as a chef and
                  then latterly as a developer. I've got a keen eye for those all important design
                  touches that can help make a website stand out and engage its user base.
                </p>
                <p className="aboutParagraph">
                  Whilst working as a Chef, I realised I have a strong passion for teaching people.
                  I always found myself helping out any new members of staff and teaching them how
                  to do certain dishes/techniques. This give me a huge sense of
                  achievement/joy/pleasure.
                </p>
                <p className="aboutParagraph">
                  When I lived in the Alps I had friends and family come out to visit. It was great
                  to see them and spend time with them. I always ended up teaching them how to
                  snowboard / ski for the week. It gave me such joy to share my knowledge and see
                  their progression.
                </p>
                <p className="aboutParagraph">
                  Learning to code has enabled me to combine the 2 passions I have in life, Learning
                  everyday and sharing my knowledge with others.
                </p>
                <p className="aboutParagraph">
                  If you are looking to get your business online or want to find out more on how you
                  can add functionality to an existing website yourself, get in touch! I' be more
                  than happy to help!
                </p>
              </div>
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo />
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
            .aboutParagraph {
              margin: 20px;
            }
            @from-width desktop {
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

export default AboutPage;
