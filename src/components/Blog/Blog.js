import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main" id="blog">
      <h1>Blog</h1>
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
          padding: 50px ${theme.space.inset.default};
        }
        h1 {
          text-align: center;
          margin: 20px 0;
        }

        div {
          display:flex;
          flex-wrap:wrap;
          justify-content: space-between;
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          div {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
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
