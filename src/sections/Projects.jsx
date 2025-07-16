
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png"
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png"

const portfolioProjects=[
   {
    company:"Acme Corp",
    year:"2022",
    title:"Dark Saas Landing Page",
    results:[
      {title:"Enhanced User Experience by 40%"},
      {title:"Improved Site Speed by 50%"},
      {title:"Increased mobile traffic by 35%"},
    ],
    link:"youtube.com",
    image:aiStartupLandingPage,
   },
   {
    company:"Acme Corp",
    year:"2022",
    title:"Dark Saas Landing Page",
    results:[
      {title:"Enhanced User Experience by 40%"},
      {title:"Improved Site Speed by 50%"},
      {title:"Increased mobile traffic by 35%"},
    ],
    link:"youtube.com",
    image:aiStartupLandingPage,
   },
   {
    company:"Acme Corp",
    year:"2022",
    title:"Dark Saas Landing Page",
    results:[
      {title:"Enhanced User Experience by 40%"},
      {title:"Improved Site Speed by 50%"},
      {title:"Increased mobile traffic by 35%"},
    ],
    link:"youtube.com",
    image:aiStartupLandingPage,
   },
   {
    company:"Acme Corp",
    year:"2022",
    title:"Dark Saas Landing Page",
    results:[
      {title:"Enhanced User Experience by 40%"},
      {title:"Improved Site Speed by 50%"},
      {title:"Increased mobile traffic by 35%"},
    ],
    link:"youtube.com",
    image:aiStartupLandingPage,
   },
]

export const ProjectSection = () => {  
  return (
    <>
    <div className="container">
      <p>Real World Results</p>
      <h2>Featured Projects</h2>
      <p>See How I transformed concepts into engaging digital experiences</p>
      <div>
        {portfolioProjects.map(project=> (
         <div key={project.title}>
          <div>
             <span>{project.company}</span>
             <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <ul>
            {project.results.map}
          </ul>
         </div> 
        ))
        }
      </div>
    </div>
    </>
  )
}

