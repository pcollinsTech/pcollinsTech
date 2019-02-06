import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main" id="blog">
        <h2>Blog</h2>
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
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 70px 0 ;
        }
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
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
