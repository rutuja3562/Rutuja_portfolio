import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Skill= () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="skills" className={darkMode === true ? "bg-white" : "bg-gray-900"} style={{marginTop:"0px"}}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        
        <div>
       
          <motion.div>
            <h4 className="mt-4 text-3xl font-semibold text-blue-500">
              My Skills
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            ></p>
          </motion.div>
          <motion.div
            className="flex flex-wrap mt-8 flex flex-wrap justify-between "
            // style={{ border: "1px solid red" }}
          >
            {techStack.map((el, index) => (
              <motion.div
                style={{ width: "30%" }}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img
                  alt=""
                  src={el.link}
                  className="w-12"
                  // style={{ border: "1px solid red" }}
                />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

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
