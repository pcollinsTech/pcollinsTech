import React from 'react'

import toogoodtobe from '../../images/projects/toogoodtobe.jpg'
import stjamesstudio from '../../images/projects/stjamesstudio.jpg'
import balincourt from '../../images/projects/balincourt.jpg'
import digitalworksagency from '../../images/projects/digitalworksagency.jpg'
import waxhivewraps from '../../images/projects/waxhivewraps.jpg'
import eiprojects from '../../images/projects/eiprojects.jpg'

import Item from './Item'

const Project = ({theme}) => {
    const items = [
        {
            name:"Too Good To Be",
            categories:["Wordpress", "E-Commerce"],
            url:"https://toogoodtobe.co.uk",
            image: toogoodtobe
        },
        {
            name:"St James Studio",
            categories:["Wordpress"],
            url:"https://stjames.studio",
            image: stjamesstudio
        },
        {
            name:"Balincourt",
            categories:["Wordpress"],
            url:"https://balincourt.co.uk",
            image: balincourt
        },
        {
            name:"Wax Hive Wraps",
            categories:["Wordpress", "E-Commerce", "Design","Logo"],
            url:"https://waxhivewraps.com",
            image: waxhivewraps
        },
        {
            name:"Digital Works Agency",
            categories:["Wordpress"],
            url:"https://digitalworksagency.com",
            image: digitalworksagency
        },
        {
            name:"EI Projects",
            categories:["Wordpress"],
            url:"https://eiprojects.co.uk",
            image: eiprojects
        }
    ]
  return (
      <React.Fragment>
          <div id="projects">
            <h2>Projects I've worked on</h2>
            <div className="container">
                    {
                        items.map(item=>{
                            return <Item project={item} theme={theme}/>
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