import React from "react"
import pp from '../assets/pp.jpg'
import {Card} from 'flowbite-react'

const Profile = () => {
    return (
        <Card>
        <div className="flex justify-end px-4 pt-4"> 
          
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            height="96"
            src={pp}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
         
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">dynand</h5>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">phone +62 8953508937</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          </div>
          <div className="mt-4 flex space-x3 Ig:mt-6">
            
        </div>
        <div>
            <img src="" alt="" />
        </div>
        </Card>
    )
  }


export default Profile