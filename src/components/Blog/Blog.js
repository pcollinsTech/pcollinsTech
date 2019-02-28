import PropTypes from "prop-types";
import React from "react";
import Headline from "../Article/Headline";

import Item from "./Item";

const Latest = props => {
  const { posts, theme } = props.props;
  
  if(posts.length <= 3) {
    return (
      <React.Fragment>
        <Headline title="Blog" theme={theme} />
        <h3>Some of my most recent posts</h3>
        <div>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </div>
        <a href="/blog">Read More...</a>
        {/* --- STYLES --- */}
        <style jsx>{`
        h2 {
          font-size: 30px;
          text-align: center;
          margin-bottom:40px;
        }
        h3 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 3em;
        }
        a{
          text-align: center;
          font-size: 24px;
          margin-bottom: 1em;
          padding: 10px 20px;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 70px;
          }
          div {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          .main {
            padding: 70px;
          }
          div {
            max-width: ${theme.text.maxWidth.homepage};
          }
        }
      `}</style>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <Headline title="Blog" theme={theme} />
        <div>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </div>
        {/* --- STYLES --- */}
        <style jsx>{`
        h2 {
          font-size: 30px;
          text-align: center;
          margin-bottom: 40px;
        }

        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 70px;
          }
          div {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          .main {
            padding: 70px;
          }
          div {
            max-width: ${theme.text.maxWidth.homepage};
          }
        }
      `}</style>
      </React.Fragment>
    )
  }
}


const Blog = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <main className="main" id="blog">
        <Latest props={props} />
      </main>
      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 70px 0 ;
        }
        `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
