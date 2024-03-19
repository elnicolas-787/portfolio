import React from "react";
import Service from "./Service";

function About() {
  const skills = [
    { id: 1, name: 'UI & UX DESIGNING', image: "/assets/icons/design.png" },
    { id: 2, name: 'WEB DEVELOPMENT', image: "/assets/icons/web-dev.png" },
    { id: 3, name: 'MOBILE DEVELOPMENT', image: "/assets/icons/mob-dev.png" },
  ]

  return (
    <div className="px-7 md:px-10 sm:mt-20 md:-mt-52" id="about">
      <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">About me</h1>
      <p className="text-white my-2 md:w-2/3 leading-[2]">
        Hi, my name is RANDRIAFANANTENANTSOA Tahirinirina Nicolas, i am a
        Fullstack web developer, UI designer, and Mobile developer. I have honed
        my skills in web Development and advance i have core understanding of
        advance UI design principales. Here are the major skills i have.{" "}
      </p>

      {/* experience section */}
      <div className="md:flex items-center my-7">
        <p className="text-blue-400 text-8xl font-bold">1+</p>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring 
          a seamless web experience for end users.</p>
      </div>

      {/* skills card */}
      <div className="flex flex-col md:flex-row justify-center">
        {
          skills.map((skill, index) => (
            <div key={index} className="skills md:w-[256px] md:h-[254px] bg-gray-400 rounded-xl hover:bg-blue-400 flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500 space-y-5">
              <img src={skill.image} alt="Image Skill" width={50} />
              <p className="text-2xl text-white font-semibold">{ skill.name }</p>
            </div>
          ))
        }
      </div>

      <Service />
    </div>
  );
}

export default About;
