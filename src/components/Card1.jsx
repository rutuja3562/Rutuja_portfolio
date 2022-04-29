import React from "react";
import { motion } from "framer-motion";
import project2 from "../assets/Nordstrom.png";
import { projectCard } from "../constants";

const Cardone = () => {
  return (
    <motion.div
      style={{ width: "48%" }}
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div>
        <a href="hello">
          <img
            style={{ marginTop: "5px" }}
            class="rounded-t-lg w-full"
            src={project2}
            alt="imgageeeee"
          />
        </a>
        <div class="p-5">
          <a href="helo">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nordstrom Rack
            </h5>
          </a>
          <p style={{textAlign:"justified"}} class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            In This Application I used HTML,CSS,JavaScript to build this application. I have cloned 
            Nordstrome Rack website and given some of the functionality as it is present in the original website.
          </p>
          <h5 class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span class="font-bold"> Tech Stack : </span>HTML | CSS | JavaScript
          </h5>
          <div
            style={{
              display: "flex",
              margin: "35px 10px 10px 0",
              // float: "left bottom",
              border: "5px solid transparent",
            }}
          >
            <a
              target={"_blank"}
              href="https://github.com/rutuja3562/Nordstrom-Rack-Clone"
              className="mr-5 cursor-pointer mt-8 hover:scale-125"
            >
              <img
                alt=""
                src="https://img.icons8.com/doodle/40/000000/github--v1.png"
              />
            </a>
            <a
              href="https://rutuja-patil.vercel.app/"
              target="_blank"
              className="mr-5 cursor-pointer mt-8 hover:scale-125"
            >
              <img
                style={{ height: "40px", width: "40px", borderRadious: "50%" }}
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRto6A_EfvPLG7qsOo2jKRR8h5gm8z-dYB9Rw&usqp=CAU"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cardone;
// line 36
// <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               In This Application we have used HTML,CSS,JavaScript,EJS to build
//               this application.Also we are using Express Js to give Backend to
//               this project
//             </p>

// <div style={{ color: "black" }}>
//   {projectCard.map((el) => {
//     <div>
//       <img src={el.img} />

//       <h1 style={{ color: "black" }}>{el.title}</h1>
//       <p>{el.Desc}</p>
//     </div>;
//   })}
// </div>;

//  <a
//    href="hello"
//    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
//  >
//    Go Live
//    <svg
//      class="ml-2 -mr-1 w-4 h-4"
//      fill="currentColor"
//      viewBox="0 0 20 20"
//      xmlns="http://www.w3.org/2000/svg"
//    >
//      <path
//        fill-rule="evenodd"
//        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//        clip-rule="evenodd"
//      ></path>
//    </svg>
//  </a>;
