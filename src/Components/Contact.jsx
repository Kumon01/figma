import { Button, FooterCopyright, FooterDivider } from 'flowbite-react'
import React from 'react'

import { MdMail } from 'react-icons/md'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'
    
    const Contact = () => {
      return (
        <div className="relative flex items-center justify-evenly h-screen gap-8 flex-wrap" id='contact'>
           
        <div className="flex flex-col" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div>
          <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white" >
            Contact Me!!
          </h5>
          <span >Have questions or want to work with me? Contact me today!</span>
          </div>
          
          <div className="flex gap-7 mt-9 flex-row" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <a href="Dynand2701@gmail.com"><MdMail className='w-10 h-10'/></a>
            <a href="https://github.com/Kumon01" ><FaGithub className='w-10 h-10'/></a>
            <a href="#" ><FaInstagram className='w-10 h-10'/></a>
            <a href="#" ><FaDiscord className='w-10 h-10'/></a>
          </div>
        </div>
        
        <div className="w-full text-center">
        <FooterDivider />
        <FooterCopyright href="#" by="Dynand™" year={2024} /> 
        </div>
        </div>
        
      )
    }

export default Contact;

