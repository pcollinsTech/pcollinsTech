import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaTag } from "react-icons/fa/";

const Meta = props => {
  const { prefix, category, theme } = props;

  return (
    <p className="meta">
      {category && (
        <span>
          <FaTag size={18} />
          <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
        </span>
      )}

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          text-align: center;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: 0 auto;
          }
        }
        @from-width tablet {
          .meta {
            text-align: center;
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Meta;
