import React from 'react'
import Leftbar from './leftbar'
import Rightbar from './Rightbar'

const SidebarDash = ({user}:{user:Array<any>}) => {
  return (
    <div>
      <Leftbar/>
      <Rightbar/>
    </div>
  )
}

export default SidebarDash
