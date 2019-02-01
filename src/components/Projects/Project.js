import React from 'react'


import Item from './Item'

const Project = ({theme, projectImages}) => {
    const items = [
      {
        name: "Too Good To Be",
        categories: ["Wordpress", "E-Commerce"],
        url: "https://toogoodtobe.co.uk",
        image: projectImages.tooGoodToBe
      },
      {
        name: "St James Studio",
        categories: ["Wordpress"],
        url: "https://stjames.studio",
        image: projectImages.stJamesStudio
      },
      {
        name: "Balincourt",
        categories: ["Wordpress"],
        url: "https://balincourt.co.uk",
        image: projectImages.balincourt
      },
      {
        name: "Wax Hive Wraps",
        categories: ["Wordpress", "E-Commerce", "Design", "Logo"],
        url: "https://waxhivewraps.com",
        image: projectImages.waxHiveWraps
      },
      {
        name: "Digital Works Agency",
        categories: ["Wordpress"],
        url: "https://digitalworksagency.com",
        image: projectImages.digitalWorksAgency
      },
      {
        name: "EI Projects",
        categories: ["Wordpress"],
        url: "https://eiprojects.co.uk",
        image: projectImages.eiProjects
      }
    ];
  return (
      <React.Fragment>
          <div id="projects">
            <h2>Projects I've worked on</h2>
            <div className="container">
                    {
                        items.map((item,index)=>{
                            return <Item project={item} theme={theme} key={index}/>
                        })
                    }
            </div>
          
          </div>

          {/* --- STYLES --- */}
          <style jsx>{`
          #projects{
              background-color: ${theme.color.brand.primary};
              padding: 50px;
          }
          h2 {
            text-align: center;
            font-size: 30px;
            color:white;
            margin-bottom:40px;
          }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top:1.5rem;
        }
        
        
      `}</style>
      </React.Fragment>
  )
}
export default Project;