import React from 'react'
import { Link } from "gatsby";
import Img from "gatsby-image";


const Item = (props) => {
  const {
    location,
    theme,
    project: {
      fields: { slug, prefix },
      frontmatter: {
        title,
        brief,
        category,
        cover: {
          children: [{ fluid }]
        }
      }
    }
  } = props;
  const border= (location.pathname === "/projects") ? "border" : ""
  return (
    <React.Fragment>
      <div className="item">
        <Link to={slug} key={slug} className="link">
          <div className={`gatsby-image-outer-wrapper ${border}`}>
            <Img fluid={fluid} />
          </div>
        </Link>
      </div>
      <div className="project">
        <h2>{title}</h2>
        <p>{brief}</p>
        <span>{category}</span>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .border {
          border: 1px solid ${theme.line.color};
        }
        :global(.link) {
          width: 100%;
          color: ${theme.text.color.primary};
          z-index: 11;
        }
        :global(.gatsby-image-outer-wrapper) {
          border-radius: ${theme.size.radius.default};
          overflow: hidden;
        }
        :global(.gatsby-image-outer-wrapper img) {
          z-index: 1;
        }
        .item {
          position: relative;
          width: 32%;
          margin-bottom: 18px;
        }
        .project {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: #008cba;
        }
        .item:hover .project {
          height: 100%;
        }
        p {
          color: white;
        }
        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .centered {
          // text-align: center;
          // line-height: 400px;
        }
        @from-width tablet {
          .item {
            max-width: 95%;
          }
        }
        @from-width desktop {
          .item {
            max-width: 32%;
          }
        }
      `}</style>
    </React.Fragment>
  );
}

export default Item;

