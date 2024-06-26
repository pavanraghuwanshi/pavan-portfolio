import React, {useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  const ToggaleMenu = ()=>{

      setIsOpen(!isOpen);
      
  };
  
  const CloseMenu = ()=>{
      setIsOpen(false);
  }

      const resumeURL = "https://drive.google.com/drive/folders/1_U-hKtq1fnK0dSDpSjS2V_gA3DJPJpDx"

  return(
              <div className=" relative w-full  font-muli bg-gray-900 ">

       <nav className="bg-transparent border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white lg:-ms-8 hover:text-gray-400">
                Pavan Raghuwanshi
              </span>
                </Link>
                <div className="block lg:hidden" >
            <button data-collapse-toggle="navbar-default"type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false" onClick={ToggaleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14" >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
              </div>

             <div className={` w-full md:block md:w-auto ${isOpen? "block" : "hidden"} p-4 `}>

              <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  text-white " 
               onClick={CloseMenu} >
                <li>
                  <Link to="/about" className="block py-2 px-3 transition hover:text-purple-700 hover:text-[19px]  text-white"
                    aria-current="page">About  </Link>
                </li>
                <li>
                  <Link to="/blogs"  className="block py-2 px-3 transition hover:text-purple-700 hover:text-[19px]  text-white"
                    aria-current="page">Blogs</Link>
                </li>
                <li>
                  <Link to="/project"  className="block py-2 px-3 transition hover:text-purple-700 hover:text-[19px]  text-white"
                    aria-current="page">Projects</Link>
                </li>
                <li>
                  <Link to={resumeURL}  className="block py-2 px-3 transition hover:text-purple-700 hover:text-[19px]  text-white"
                    aria-current="page">Resume</Link>
                 
                </li>
                <li>
                  <Link to="/" className="block py-2 px-3 transition hover:text-purple-700 hover:text-[18px]  text-white"
                    aria-current="page">Contect</Link>
                </li>
               
              </ul>
            </div>
           
          </div>
        </nav>

    </div>








)
}

export default Header;
