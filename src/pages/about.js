import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import avatar from "../images/jpg/avatar.jpg"
import flip from "../images/jpg/flip.jpg"
import fire from "../images/jpg/fire.jpg"

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
                        <img src={flip} className="avatar"/>
                        <img src={avatar} className="avatar"/>
                        <img src={fire} className="avatar"/>
                    </div>
                    <p> 
                        I'm Phil Collins. Not the singer unfortunately, but the developer.  I live and work mostly in Bournemouth, whilst 
                        hopping to and from Belfast, Northern Ireland (where I'm from).  Before I started out building websites and chatbots, 
                        I was working as a chef in the french alps.
                    </p>
                    <p> 
                        Yep, you read that right.  A pretty huge career change, but i pulled it off.  I was cooking fine
                        dishes by day, and learning to code and build sites initially for friends and colleagues by
                        night.  Having taken all of those learnings from the mountains, I packed the snowboard up
                        and headed to Bournemouth where I’ve been now for a number of years.
                    </p>
                    <p> 
                        Since I left working in the mountains, I have collaborated with some of Bournemouth’s most
                        exciting start-ups, agencies and studios.  In doing so, I have been fortunate enough to work
                        next to some of the brightest tech minds the south has to offer, and i like to think some of
                        their brilliance has rubbed off on me too.
                    </p>
                    
                    <p> 
                        My long running thought is that I have always wanted to go out on my own and work with a
                        number of SME’s to help them bring to life their digital projects, websites and conversational
                        chatbots that help them to stand out amongst the bigger brands.
                    </p>
                    
                    <p> 
                        Creative flair is something I have long since held, having worked as a chef and then latterly
                        as a developer. So I have got a keen eye for those all important design touches that can
                        help make a website stand out and engage its user base.
                    </p>
                </div>
            </section>
          </Article>
          
        )}
        </ThemeContext.Consumer>
        <ThemeContext.Consumer>
        { theme => (

        <style jsx="true">{`
            img {
                margin: 0 20px 0px 20px;
            }
            .conatainer {
                margin: 0 auto;
            }
            .intro {
                text-align: center;
            }
            .avatar {
                max-height: 160px;
                max-width: 160px;
                border: 2px solid ${theme.color.brand.primary};
                border-radius: 50%;
            }
            p {
                margin: 20px;
            }
        `}</style>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};


export default AboutPage;

