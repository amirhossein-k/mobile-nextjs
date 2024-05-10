import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import { USER } from '../../../types'

const SidebarDash = ({user,children}:{user:USER,children:any}) => {
  
  return (
    <div className='w-full h-full flex sm:flex-row  flex-col-reverse bg-red-200'>
      
      <div className="left sm:w-[70%] w-full  border-2">

      <Leftbar>{children}</Leftbar>
      </div>
      <div className="right sm:w-[30%] text-center w-full border-2">
      <Rightbar/>

      </div>
    </div>
  )
}

export default SidebarDash
