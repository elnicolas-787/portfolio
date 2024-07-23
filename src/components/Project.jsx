import React from "react";
import zebranceImg from "../assets/zebrance.png";
import starEvaluatorImg from "../assets/star-evaluator.png";

function Project() {
  const projects = [
    {
      id: 1,
      title: "GESTION DE PRODUCTION",
      description: "Plateform manage production the sea product in usine",
      link: "/",
    },
    {
      id: 2,
      title: "ZEBRANCE",
      description:
        "Plateform for assurance(House, Car, Motor, Smartphone) online",
      image: zebranceImg,
      link: "app.zebrance.com",
    },
    {
      id: 3,
      title: "STAR EVALUATOR",
      description: "Plateform manage reviews the product and website",
      image: starEvaluatorImg,
      link: "www.starevaluator.com",
    },
  ];

  return (
    <div className="px-7 md:px-10 my-20" id="project">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">
          Featured projects :
        </h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects.{" "}
        </p>

        {/* Featured project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] rounded p-4 max-sm:max-w-96 mx-auto"
            >
              <a
                href={project.link}
                className="mb-4 shadow-md shadow-blue-300 w-48 h-48 flex justify-center rounded-lg p-2 mx-auto"
              >
                <img src={project.image} alt="Project" className="w-full" />
              </a>
              <h3 className="text-blue-400 font-semibold text-lg text-center">
                {project.title}
              </h3>
              {/* <p className="text-white mt-1">{project.description}</p> */}

              {/* <div className='mt-10 flex justify-center'>
              <button className='btn font-semibold outline-none bg-blue-400 py-2 px-8 text-white rounded-lg hover:bg-white hover:text-blue-400 transition-all duration-500'>GitHub</button>
              <button className='btn w-full font-semibold outline-none px-9 py-1.5 rounded-lg border-2 border-blue-400 text-blue-400 hover:border-white hover:text-white transition-all duration-500'>Live Demo</button>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
