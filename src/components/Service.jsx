import React from "react";

function Service() {
  const services = [
    {
      id: 1,
      name: "UI & UX DESIGNING",
      description: "I design beautiful web interfaces with Figma.",
    },
    {
      id: 2,
      name: "WEB DEVELOPMENT",
      description:
        "I create beautiful interfaces with simple HTML, CSS & Javascript and also frameworks like ReactJs and VueJs.",
    },
    {
      id: 3,
      name: "MOBILE DEVELOPMENT",
      description:
        "I am an expert mobile developer, I have experience using React Native.",
    },
    {
      id: 4,
      name: "NPM AND NODEJS",
      description:
        "I have core understanding of NPM. I can also develop general purpose application with NodeJS.",
    },
  ];

  return (
    <div>
      <h1 className="text-blue-400 font-semibold text-3xl md:text-5xl mt-14 mb-10">
        The services i offer :
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 sm:px-10 lg:px-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-4 border-gray-500 rounded-2xl hover:border-blue-400 h-80 flex flex-col justify-center items-center p-4 text-center text-white transition-all duration-500"
          >
            <h6 className="text-2xl mb-4">{service.name}</h6>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
