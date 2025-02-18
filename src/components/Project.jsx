import React from "react";
import zebranceImg from "../assets/zebrance.png";
import starEvaluatorImg from "../assets/star-evaluator.png";

function Project() {
  const projects = [
    {
      id: 3,
      title: "RECOVEREO",
      image: recovereoImg,
      description: "Plateforme spécialisée dans le recouvrement de créances, aidant les créanciers à sécuriser et gérer leurs paiements impayés grâce à des solutions amiables et judiciaires",
      link: "www.recovereo.com",
    },
    {
      id: 1,
      title: "ZEBRANCE",
      description:
        "Plateforme d'assurance en ligne (Maison, Voiture, Moto, Smartphone).",
      image: zebranceImg,
      link: "app.zebrance.com",
    },
    {
      id: 2,
      title: "STAR EVALUATOR",
      description: "Plateforme gère les avis sur le produit et le site web.",
      image: starEvaluatorImg,
      link: "www.starevaluator.com",
    },
  ];

  return (
    <div className="px-7 md:px-10 my-20" id="project">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">
          Projets :
        </h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
          J'ai travaillé sur de nombreux projets en tant que développeur web ; voici quelques-uns de mes projets réels en ligne.{" "}
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
