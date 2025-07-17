import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
// import CheckCircleIcon from "../assets/icons/check-circle.svg"
import  CheckCircleIcon from "../assets/icons/check-circle.svg?component"
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced User Experience by 40%" },
      { title: "Improved Site Speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "youtube.com",
    image: aiStartupLandingPage,
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced User Experience by 40%" },
      { title: "Improved Site Speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "youtube.com",
    image: aiStartupLandingPage,
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced User Experience by 40%" },
      { title: "Improved Site Speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "youtube.com",
    image: aiStartupLandingPage,
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced User Experience by 40%" },
      { title: "Improved Site Speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "youtube.com",
    image: aiStartupLandingPage,
  },
];

export const ProjectSection = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real World Results
          </p>
        </div>
        <h2 className="text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">
          See How I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8"
            >
            <div className="flex">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              </div>
              <h3 className="text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul>{project.results.map((result)=>(
                  <li className="flex">
                    <CheckCircleIcon/>
                      <span>{result.title}</span>
                  </li>

              ))}


                 
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <CheckCircleIcon />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
