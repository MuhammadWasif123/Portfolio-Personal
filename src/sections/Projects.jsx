import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import CheckCircleIcon from "../assets/icons/check-circle.svg?react";
import ArrowTopRight from "../assets/icons/arrow-up-right.svg?react";
import grainImage from "../assets/images/grain.jpg";
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
      <section className="pb-16 lg:py-24">
        <div className="container m-auto">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Real World Results
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
            See How I transformed concepts into engaging digital experiences
          </p>
          <div className="flex flex-col md:mt-20 mt-10 gap-20">
            {portfolioProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl overflow-hidden relative z-0 after:z-10 md:pt-12 md:px-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pt-8 px-8 lg:pt-16 lg:px-20 mx-2 after:pointer-events-none"
              >
                <div
                  className="absolute inset-0 opacity-5 -z-10"
                  style={{
                    backgroundImage: `url(${grainImage})`,
                  }}
                ></div>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-3 mt-4">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/52">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site </span>
                    <ArrowTopRight className="size-4" />
                  </button>
                </a>
                </div>
                <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
                </div>
                </div>
                {/* <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
