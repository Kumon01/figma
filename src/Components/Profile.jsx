import React from "react"
import pp from '../assets/pp.jpg'
import {Card} from 'flowbite-react'

const Profile = () => {
    return (
    
      <div id="Home" className="flex justify-evenly items-center pb-10 h-screen">
        <div className="flex flex-col">
          <h1 className="mb-1 text-xs font-medium text-yellow-900 dark:text-white">Hallo World,I'm</h1>
          <h5 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Dynand ibnukafi Pratama</h5>
          <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">Junior Programing</h5>
          <h5 className="mb-1 text-s font-medium text-yellow-900 dark:text-white">Wellocome to personal website 👋</h5>
        </div>
          <img
              alt="Bonnie image"
              height="180"
              src={pp}
              width="180"
              className="mb-3 rounded-full shadow-lg flex justify-end"
          />
      </div>
    
    )
  }


export default Profile