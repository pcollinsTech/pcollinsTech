import React from 'react'

const Item = ({theme, project}) => {
  return (
    <React.Fragment>
      <div className="item">
        <a href={project.url} target="__blank">
          <img src={project.image} alt={`${project.name}screenshot`} />
        </a>
        <div className="project">
          <h2>{project.name}</h2>
          <p>{project.categories.join(" / ")}</p>
        </div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        h2 {
          font-size: 2rem;
          color: ${theme.color.brand.secondary};
          padding-bottom: 1rem;
        }
        img {
          max-width: 100%;
        }
        .item {
          max-width: 32%;
          margin-bottom: 14px;
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
            max-width: 90%;
          }
        }
      `}</style>
    </React.Fragment>
  );
}

export default Item;