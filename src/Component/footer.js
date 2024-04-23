import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='  bg-gray-900'>

           <div id="contact"><div className="px-12 py-16 md:px-56">
            <div className="mb-12">
            <h2 className="text-5xl text-center font-semibold text-white">
             Get in touch with me
             </h2>
             </div>
  <div className="flex justify-center">
    <Link to="mailto:pavanraghuwanshi77@gmail.com" className="bg-purple-500 text-white px-7 py-4 cursor-pointer hover:bg-purple-700 hover:scale-105 rounded-md text-xl font-medium">Contact Me</Link>
   
  </div>
</div>
</div>

       <div id="footer">
    <footer className=" dark:bg-gray-900 ">
    <div className="container px-6 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
            Pavan Raghuwanshi</a>

          <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <span className=" text-purple-700  text-lg font-semibold">© 2024, Built by Pavan Raghuwanshi</span>
          </div>
        </div>

        <div className='' >
          <p className="font-semibold text-white dark:text-white text-xl">
            Links
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2 text-1xl">
            <Link to="/about" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" >  About </Link>

            <Link to="/blogs" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" >  Blogs </Link>

            <Link to="/project" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" >  Projects </Link>

            <Link to="/resume" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" >  Resume </Link>

            <Link to="/contect" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" >  Contect </Link>

            <Link to="/Learnings" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700" > Learnings </Link>






            <a href="/blogs.html" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"></a>
            <a href="/#projects" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"></a>
            <a href="/resume.html" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"></a>
            <a href="/#contact" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"></a>
            <a href="/learnings/index.html" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-purple-700 hover:underline hover:text-purple-700"></a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white dark:text-white text-xl">
            Get in touch
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <div className="flex items-center space-x-4">
              <a href="https://github.com/pavanraghuwanshi" target="_blank" className="hover:scale-110">
                <svg className="h-8 w-8 text-purple-500 hover:text-purple-700" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/pavan-raghuwanshi" target="_blank" className="hover:scale-110">
                <svg className="h-8 w-8 text-purple-500 hover:text-purple-700" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>

              <a href="mailto:pavanraghuwanshi77@gmail.com" target="_blank" className="hover:scale-110">
                <svg className="h-9 w-9 text-purple-500 hover:text-purple-700" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>


    </div>
  )
}

export default Footer
