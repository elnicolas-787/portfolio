import React from "react";
import Service from "./Service";

function About() {
  const skills = [
    {
      id: 1,
      name: "UI & UX",
      image: "/assets/icons/design.png",
      alt: "Design",
    },
    {
      id: 2,
      name: "WEB",
      image: "/assets/icons/web-dev.png",
      alt: "Web Development",
    },
    {
      id: 3,
      name: "MOBILE",
      image: "/assets/icons/mob-dev.png",
      alt: "Mobile Development",
    },
  ];

  return (
    <div className="px-7 md:px-10 sm:mt-20 md:-mt-52" id="about">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">
          À propos de moi
        </h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
          Bonjour, je m'appelle RANDRIAFANANTENANTSOA Tahirinirina Nicolas, je suis développeur web Fullstack, designer UI et développeur mobile. J'ai perfectionné mes compétences en développement web et j'ai une compréhension approfondie des principes avancés du design UI. Voici les principales compétences que je possède.{" "}
        </p>

        <div className="md:flex items-center my-7">
          <p className="text-blue-400 text-8xl font-bold">2+</p>
          <p className="text-white text-lg sm:text-2xl md:ml-5">
            Des années d'expérience. Spécialisé dans la création d'applications, tout en garantissant une expérience web fluide pour les utilisateurs finaux.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills md:w-[256px] md:h-[254px] bg-gray-400 rounded-xl hover:bg-blue-400 flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500 space-y-5"
            >
              <img src={skill.image} alt={skill.alt} width={50} />
              <p className="text-2xl sm:text-xl md:text-2xl text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>

        <Service />
      </div>
    </div>
  );
}

export default About;
