import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from "emailjs-com";
const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div
        style={{ marginTop: "0", paddingTop: 0 }}
        className={
          darkMode
            ? "bg-gray-100 pt-24 md:h-screen"
            : "bg-black pt-24 text-white md:h-screen"
        }
      >
        <div
          className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 "
          // style={{ border: "3px solid blue" }}
        >
          <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
            Contact
          </h2>
          <div tyle={{ textAlign: "center" }}>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Get In Touch
            </h4>
            <p className="text-gray-500 text-xl"></p>
          </div>

          <div
            // style={{ border: "3px solid teal" }}
            className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24"
          >
            <div className="w-full md:pr-8">
              <form

              //  onSubmit={onSubmitHandler}
              >
                <div class="my-6">
                  <label
                    for="name"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    // onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    // onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="message"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your message"
                    // onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="flex justify-between ">
                  <div className="underline">
                    <p>Send me email directly</p>
                  </div>
                  <div
                   
                    className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                  >
                    <a href="mailto:rspahtil3562@gmail.com"> Submit</a>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="w-full flex flex-col md:items-end   md:mt-12"
              style={{
                textAlign: "center",
                display: "flex",
              }}
            >
              <h3 className="text-2xl font-bold">Phone</h3>
              <a className="mb-5 mt-4 font-semibold text-white-700 block uppercase">
                +91 9075613562
              </a>

              <h3 className="text-2xl font-bold mb-3"> Email</h3>

              <a href="mailto:rspatil3562@gmail.com">rspatil3562@gmail.com</a>
              <br />
              <h3 className="text-2xl  font-bold">Social</h3>

              <ul className="flex">
                {contactLinks.map((el) => (
                  <a
                    target={"_blank"}
                    href={el.link}
                    className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  >
                    <img alt="" src={el.url} />
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ border: "3px solid #111827", marginTop: "0" }}
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Rutuja Patil
      </div>
    </div>
  );
};

export default Contact;
// <a href="mailto:rspatil3562@gmail.com">Submit</a>;
//  <h1 className="text-3xl  font-bold">Address</h1>
//             <a
//               href="hello"
//               className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
//             >
//               Jhilmil Colony, Delhi
//               <br />
//               India
//             </a>

//  <a
//    href="hello"
//    className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
//  >
//    rspatil3562@gmail.com
//  </a>;

// Contact
// If you want to know more about me or my work, or if you would just
//             <br />
//             like to say hello, send me a message. I'd love to hear from you.

// afer get in Touch
