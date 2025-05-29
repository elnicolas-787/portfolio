import React from "react";
import heroImg from "../assets/Nicolas.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="px-7 md:px-10 mt-14 md:h-screen" id="home">
      <div className="max-w-7xl mx-auto pt-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-white pt-20 md:pt-0">
            <h6 className="text-3xl">Bonjour, je suis</h6>
            <h1 className="font-semibold text-3xl md:text-5xl my-4">
              Tahirinirina Nicolas
            </h1>
            <p className="md:w-96">
              Développeur fullstack. Je crée une expérience web fluide pour les utilisateurs finaux.
            </p>

            <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row sm:justify-start mt-10">
              <a
                href="/assets/CV_Nicolas.pdf"
                download="CV_Nicolas.pdf"
                className="text-center btn font-semibold outline-none bg-blue-400 py-2.5 px-4 text-white rounded-lg hover:bg-white hover:text-blue-400 transition-all duration-500"
              >
                Télécharger CV
              </a>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-center btn cursor-pointer font-semibold outline-none px-6 py-2 rounded-lg border-2 border-blue-400 text-blue-400 hover:border-white hover:text-white transition-all duration-500"
              >
                Contact
              </Link>
              {/* <button className='btn font-semibold outline-none px-6 py-1.5 rounded-lg border-2 border-blue-400 text-blue-400 ml-5 hover:border-white hover:text-white transition-all duration-500'>Contact info</button> */}
            </div>
          </div>

          <div className="order-first md:order-last relative w-[20rem] md:w-[27rem]">
            <img
              src={heroImg}
              alt="Hero"
              className="rounded-full shadow-blue-400 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'></div> */}
    </div>
  );
}

export default Home;
