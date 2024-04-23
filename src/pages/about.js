import React from 'react'
import Image from "../Image/image.jpg"

const About = () => {
  return (
    <div className='bg-gray-900 lg:h-screen lg:flex p-6' >

          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-4/5 ">
            <img src={Image} className="relative rounded-full mx-auto sm:p-12 h-auto md:-ms-12 lg:ms-28 lg:mt-40 " alt="Image " />
          </div>

        <div className=' text-white '>
      <div className=' lg:text-xl lg:font-medium lg:ms-60 lg:me-60 mt-32' >
      <h2 className='relative font-semibold text-xl flex justify-start mt-12 text-purple-500'>My Journey:</h2>

        <p className='mt-8'>
        I am Pavan Raghuwanshi, poised at the beginning of a promising journey in the realm of technology. With keen interest and dedication, I am exploring the vast landscape of software engineering, eager to contribute and evolve. Currently independent, I enjoy the flexibility to delve into diverse technologies and opportunities that will define and shape my career path. I am passionately committed to continuous learning and enthusiastic about using technology to create innovative solutions that challenge the conventional and expand possibilities.
        </p>
        <h2 className='relative font-semibold text-xl flex justify-start mt-12  text-purple-500'>Educational Background and Technical Proficiency: </h2>

        <p className='mt-8'> 
            
            A Continuous Learning Journey As a Bachelor of Computer Science graduate from MVM College, Barkatullah University, my technical foundation is solidly built upon proficiency in JavaScript, Node.js, Express.js, React.js, and the MERN stack. This educational and practical experience equips me to continuously expand my technical expertise and push the boundaries of software development. Fueled by a passion for technology, I am committed to leveraging my skills to create impactful solutions that truly make a difference.
        </p>
        </div>

      </div>
    </div>
  )
}

export default About
