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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNameCli = (e) => {
    setNameCli(e.target.value);
  };
  const handleEmailCli = (e) => {
    setEmailCli(e.target.value);
  };
  const handleMessageCli = (e) => {
    setMessageCli(e.target.value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!nameCli.trim()) {
      newErrors.name = "Le nom est requis.";
      valid = false;
    }

    if (!emailCli.trim()) {
      newErrors.email = "L'email est requis.";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailCli)) {
        newErrors.email = "Adresse email invalide.";
        valid = false;
      }
    }

    if (!messageCli.trim()) {
      newErrors.message = "Le message est requis.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSendMessage = () => {
    if (!validateForm()) return;

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
    <div className="my-10 px-7 md:px-10" id="contact">
      <div className="pt-20 mx-auto max-w-7xl">
        <h1 className="my-5 text-3xl font-semibold text-blue-400 md:text-5xl">
          Contact :
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="max-sm:text-sm text-white my-2 md:w-2/3 leading-[2]">
              Vous êtes satisfait de mes services ? N'hésitez pas à me
              contacter.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a
                  href="mailto:tahirinirina.nicolas@gmail.com"
                  className="ml-4 text-white max-sm:text-sm"
                >
                  tahirinirina.nicolas@gmail.com
                </a>
              </li>

              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#fff"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="ml-4 text-white max-sm:text-sm">
                  +261 34 17 350 32 / +261 37 61 004 98
                </span>
              </li>

              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#fff"
                  viewBox="0 0 368.16 368.16"
                >
                  <path
                    d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="ml-4 text-white max-sm:text-sm">
                  Avenue de Port Mahavatse II, Tuléar 601
                </span>
              </li>
            </ul>

            <ul className="flex mt-12 space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61551025183253">
                <img src={facebook} alt="Facebook" width={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/tahirinirina-nicolas-7a0994336/"
                className="ml-4"
              >
                <img src={linkdin} alt="Linkedin" width={30} />
              </a>
            </ul>
          </div>

          <div className="md:w-1/2">
            <p className="mb-6 text-xl text-white mt-14 md:mt-0">
              Contactez-moi, créons de la magie ensemble.
            </p>

            <div className="space-y-5">
              <div className="space-y-0.5">
                <input
                  type="text"
                  name="name"
                  value={nameCli}
                  placeholder="Nom: "
                  className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none transition-all duration-500 focus:ring-1 focus:ring-blue-400"
                  onChange={handleNameCli}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 sm:text-sm">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-0.5">
                <input
                  type="email"
                  name="email"
                  value={emailCli}
                  placeholder="Email: "
                  className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none transition-all duration-500 focus:ring-1 focus:ring-blue-400"
                  onChange={handleEmailCli}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-0.5">
                <textarea
                  name="message"
                  value={messageCli}
                  placeholder="Message:"
                  rows={5}
                  className="bg-[#F5F5F5] text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded-lg outline-none transition-all duration-500 focus:ring-1 focus:ring-blue-400"
                  onChange={handleMessageCli}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 sm:text-sm">
                    {errors.message}
                  </p>
                )}
              </div>

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
                    className="ml-3 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 ml-3 rotate-90 rtl:-rotate-90"
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
