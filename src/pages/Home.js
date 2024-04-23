import React from "react";
import {Link} from 'react-router-dom'
import photo from "../Image/image.jpg";

const Home = () => {
  return (
    <>
      <div className="relative w-full lg:h-screen font-muli bg-gray-900 xl:h-screen">
        <div className="relative">
          <div className="container m-auto px-6 pt-60 md:px-12 lg:pt-[4.8rem] lg:px-28">
            <div className="items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-9/12 lg:py-24 xl:py-32 -mt-12">
                <h1 className="font-bold text-7xl text-white md:text-6xl lg:w-11/12 ">
                  <span className=" text-4xl md:text-6xl lg:text-7xl ">
                    Hi, I’m Pavan |
                  </span>
                  <span className=" flex relative">
                    <span className="underline text-purple-500 hover:text-purple-700 cursor-pointer text-4xl md:text-6xl lg:text-7xl ">
                      Software Engineer
                    </span>
                  </span>
                </h1>
                <div>
                  <div className="flex item-center space-x-4 mt-8 content-center">
                    <a href="https://github.com/pavanraghuwanshi" target="_blank">
                      <svg
                        className="h-10 w-10 text-purple-500 hover:text-purple-700"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0"
                        viewBox="0 0 496 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/pavan-raghuwanshi"
                      target="_blank"
                    >
                      <svg
                        className="h-10 w-10 text-purple-500 hover:text-purple-700"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                    </a>

                    <a href="mailto:pavanraghuwanshi77@gmail.com" target="_blank">
                      <svg
                        className="h-10 w-10 text-purple-500 hover:text-purple-700"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mt-8 lg:text-xl lg:font-medium  text-white lg:w-9/12">
                  I love exploring and creating 🌠 I'm a lifelong learner 🎓.
                  When I am not in front of laptop screen, I am cooking 🧑‍🍳 and
                  spending time with my family
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
           {/* skill section */}
      <section className="px-8 py-8 md:px-56 lg:h-screen  ">
        <div className="mb-6">
          <h2 className="text-5xl font-weight-400 text-gray-800">My Skills</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center ">
             {/* 1st Column - Profile Image */}

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 mb-4 my-5 ">
            <img
              src={photo}
              alt="Profile Image"
              className="rounded-full mx-auto w-3/3 h-auto sm:ms-0 md:-ms-12 lg:-ms-20" />
          </div>

          {/*  2nd Column - Skills Cloud and Paragraph  */}
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/5 mb-4 ">
            <div className="flex flex-wrap text-white text-base font-semibold">
              <div className="text-xl font-semibold ">
                <div className="inline-flex relative w-fit ">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    HTML5 , CSS
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    Javascript
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    ReactJs
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    NodeJs
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    ExpressJs
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    C
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    C++
                  </button>
                </div>

                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    MERN
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    MEVN
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    MongoDB
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    Linux
                  </button>
                </div>
                <div className="inline-flex relative w-fit">
                  <button className="flex flex-row p-2 m-2 bg-gray-900 font-muli cursor-pointer shadow-none hover:border-tertiary-medium hover:border-red-400 hover:scale-110 rounded-md">
                    Version Control
                  </button>
                </div>
              </div>
            </div>
            {/*  Paragraph and title below skills */}
            <h4 className="text-2xl font-bold mt-4">
              I love building stuff 📱
            </h4>
            <p className="mt-4 text-gray-700 leading-8 text-xl">
              Hey there! 👋 I'm pavan Raghuwanshi, and I thrive on building
              <b>scalable and robust solutions </b>, delving into the
              fascinating realm of software engineering. I enjoy pushing the
              boundaries of what's possible and finding creative ways to make
              things work.
              <br />
              <br />
              When I'm not in front of a laptop screen, you'll find me in the
              kitchen 👨‍🍳, whipping up delicious dishes. Beyond coding, my
              favorite moments are spent with my family, savoring good food 🍲,
              and making lasting memories.
            </p>
            {/* Keep Reading My Bio Link  */}
            <a
              href="/about.html"
              className="text-purple-500 underline font-bold text-xl mt-4 inline-block hover:scale-105">
              Keep Reading My Bio
            </a>
            |
            <a
              href="/resume.html"
              className="text-purple-500 underline font-bold text-xl mt-4 inline-block hover:scale-105"
              target="_blank" >
              Resume
            </a>
          </div>
          </div>
      </section> 
      {/* skill section end */}

        {/* Blogs section */}
      <section  className="px-8 py-8 md:px-56 ">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-4xl font-weight-400 text-gray-800">
              Featured Blogs
            </h2>
          </div>

          <div className="flex">
            <a
              href="/blogs.html"
              className="ml-auto text-purple-500 underline font-bold mt-4 inline-block text-xl" >
             
              Keep reading my blogs
            </a>
          </div>
          </div>
      </section>

        {/* Blog section end */}





      {/* project section */}


      <section className="px-8 py-8 md:px-56" id="projects">
        <div className="mb-6">
            <h2 className="text-4xl text-center font-weight-400 text-gray-800">
            Projects
            </h2>
        </div>
          <a href="" className="text-purple-500 underline font-bold mt-4 inline-block text-lg">
            <span>Overview |</span></a>
          <a href="" target="_blank" className="text-purple-500 underline font-bold  mt-4 inline-block text-lg "><span>Live |</span></a>
          <a href="https://github.com/pavanraghuwanshi" className="text-purple-500 underline font-bold mt-4 inline-block text-lg" target="_blank">Github
          </a>
      </section>
        
      {/* contect section */}

   





    </>
    )
};

export default Home;
