import React from 'react'
import Headline from "../Article/Headline";


import Item from './Item'

const Project = props => {
  const {theme, projects, location} = props
  const background = (location.pathname === "/projects") ? "white" : "blue";
  return (
    <React.Fragment>
      <div id="projects" className={background}>
        <Headline title="Portfolio" theme={theme} />
        <h3>Some projects I've worked on in the past</h3>
        <div className="container">
          {projects.map((project, index) => {
            return <Item project={project.node} theme={theme} key={index} location={location} />;
          })}
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        #projects {
          padding: 70px 50px;
        }
        .white {
          background-color: #ffffff;
          color: ${theme.color.brand.primary};
        }
        .blue {
          background-color: ${theme.color.brand.primary};
          color: white;
        }
        h3 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 3em;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 1.5rem;
        }
      `}</style>
    </React.Fragment>
  );
}
export default Project;