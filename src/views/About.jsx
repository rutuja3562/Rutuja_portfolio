import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 ">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Observant and detailed oriented aspiring
              Full-Stack Web developer. Passionate about implementing and
              launching new projects. Self-motivated and curious with a keen
              interest in building user-centric products. Looking forward to
              honing my skills in a challenging workspace.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;


// line 52
//     Using a combination of cutting-edge technologies and reliable
//               open-source software I build user-focused, performant apps and
//               websites for smartphones, tablets, and desktops.

//  I am Web Devloper. Strong in design and integration with intuitive
//               problem-solving skills. Proficient in React, Javascript.
//               Passionate about implementing and launching new projects. Ability
//               to translate business requirements into technical solutions.
//               Looking to start the career as a web developer with a reputed firm
//               driven by technology.