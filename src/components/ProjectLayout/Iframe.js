import React from 'react'
import laptop from '../../images/png/theme-laptop-full.png'

const Iframe = ({project}) => {

  return (
    <React.Fragment>
      <div className="laptop-wrapper">
        <iframe
          src={project}
          width="400"
          height="200"
          frameBorder="0"
          scrolling="auto"
          className="frame-area"
        />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .laptop-wrapper {
          position: relative;
          padding-top: 20px;
          padding-bottom: 52.5%;
        }
        .laptop-wrapper iframe {
          box-sizing: border-box;
          background: url(${laptop}) center center no-repeat;
          background-size: contain;
          padding: 2.5% 11.9% 6.8%;
          position: absolute;
          top: 0;
          left: 0;
          width: 1440px;
          height: 100%;
          -ms-transform: scale(0.75);
          -moz-transform: scale(0.75);
          -o-transform: scale(0.75);
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
        }
      `}</style>
    </React.Fragment>
  );
}

export default Iframe
