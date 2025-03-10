import React from "react";

function Service() {
  const services = [
    {
      id: 1,
      name: "UI & UX",
      description: "I design beautiful web interfaces with Figma.",
      image: "/assets/icons/design.png",
      alt: "Design"
    },
    {
      id: 2,
      name: "WEB",
      description:
        "Je crée de belles interfaces avec du HTML, CSS et JavaScript simples, ainsi que des frameworks comme ReactJs et VueJs.",
      image: "/assets/icons/web-dev.png",
      alt: "Web Development"
    },
    {
      id: 3,
      name: "MOBILE",
      description:
        "Je suis un développeur mobile expert, j'ai de l'expérience avec React Native.",
      image: "/assets/icons/mob-dev.png",
      alt: "Mobile Development"
    },
    {
      id: 4,
      name: "NPM AND NODEJS",
      description:
        "J'ai une compréhension approfondie de NPM. Je peux également développer des applications à usage général avec NodeJS.",
      image: "/assets/icons/node-js.png",
      alt: "NodeJs"
    },
  ];

  return (
    <div>
      <h1 className="text-blue-400 font-semibold text-3xl md:text-5xl mt-14 mb-10">
        Les services que je propose :
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5 sm:px-2 md:px-10 lg:px-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="max-sm:max-w-96 mx-auto border-4 border-gray-500 rounded-2xl hover:border-blue-400 flex flex-col px-4 py-8 text-center text-white transition-all duration-500"
          >
            <img src={service.image} className="mx-auto" alt={service.alt} width={50} />
            <h6 className="text-2xl my-4">{service.name}</h6>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
