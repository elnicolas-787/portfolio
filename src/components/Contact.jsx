import React, { useState } from "react";
import facebook from "../assets/facebook.png";
// import twitter from "../assets/x-twitter.png";
// import tictoc from "../assets/tic-tac.png";
import linkdin from "../assets/linkedin.png";

function Contact() {
  const [nameCli, setNameCli] = useState("");
  const [emailCli, setEmailCli] = useState("");
  const [messageCli, setMessageCli] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameCli = (e) => {
    setNameCli(e.target.value);
  };
  const handleEmailCli = (e) => {
    setEmailCli(e.target.value);
  };
  const handleMessageCli = (e) => {
    setMessageCli(e.target.value);
  };
  const handleSendMessage = () => {
    setLoading(true);

    const formData = {
      name: nameCli,
      email: emailCli,
      message: messageCli,
    };

    fetch("https://getform.io/f/qalojymb", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        setNameCli("");
        setEmailCli("");
        setMessageCli("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="px-7 md:px-10 my-10" id="contact">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">
          Contact :
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-white my-2 md:w-2/3 leading-[2]">
              Vous êtes satisfait de mes services ? N'hésitez pas à me contacter.{" "}
            </p>

            {/* social icon */}
            <div className="flex">
              <a href="https://www.facebook.com/profile.php?id=61551025183253">
                <img src={facebook} alt="Facebook" width={30} />
              </a>
              <a href="https://www.linkedin.com/in/tahirinirina-nicolas-7a0994336/" className="ml-4">
                <img src={linkdin} alt="Linkedin" width={30} />
              </a>
              {/* <a href="/" className="ml-4">
                <img src={twitter} alt="Twitter" width={30} />
              </a>
              <a href="/" className="ml-4">
                <img src={tictoc} alt="Tic Toc" width={30} />
              </a> */}
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="mt-14 md:mt-0 text-white text-xl mb-6">
              Contactez-moi, créons de la magie ensemble.
            </p>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                value={nameCli}
                placeholder="Nom: "
                className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none focus:border focus:border-blue-400 transition-all duration-500"
                onChange={handleNameCli}
              />
              <input
                type="email"
                name="email"
                value={emailCli}
                placeholder="Email: "
                className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none focus:border focus:border-blue-400 transition-all duration-500"
                onChange={handleEmailCli}
              />
              <textarea
                name="message"
                value={messageCli}
                placeholder="Message:"
                rows={5}
                className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none focus:border focus:border-blue-400 transition-all duration-500"
                onChange={handleMessageCli}
              ></textarea>

              <button
                type="button"
                disabled={loading}
                onClick={handleSendMessage}
                className={`btn max-sm:w-full py-2 px-12 text-white font-semibold flex items-center justify-center rounded-md ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "cursor-pointer bg-blue-400"
                }`}
              >
                Envoyer
                {loading ? (
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="ml-3 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                ) : (
                  <svg
                    class="w-4 h-4 rotate-90 rtl:-rotate-90 ml-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
