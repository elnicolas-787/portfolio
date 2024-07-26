import React from "react";

function Footer() {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="max-w-7xl mx-auto pt-20">
        <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
          <p>@ Copyright 2024 | Tahirinirina Nicolas</p>
          <p className="hidden sm:block">Fullstack Developer</p>
          <p className="hidden sm:block">Mobile Developer</p>
          <p className="hidden sm:block">UI Designer</p>
        </div>

        {/* <div className='flex mt-10 mb-5 justify-center'>
        <a href="/" target='_blank' rel='norefferer'>
          <img src={facebook} alt="Facebook" width={30} />
        </a>
        <a href="/" className='ml-4' target='_blank' rel='norefferer'>
          <img src={linkedin} alt="Linkedin" width={30} />
        </a>
        <a href="/" className='ml-4' target='_blank' rel='norefferer'>
          <img src={twitter} alt="Twitter" width={30} />
        </a>
        <a href="/" className='ml-4' target='_blank' rel='norefferer'>
          <img src={tictoc} alt="Tic Toc" width={30} />
        </a>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
