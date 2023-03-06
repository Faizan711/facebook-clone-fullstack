import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarRow.css"

function SidebarRow({src, Icon, titles}) {
  return (
    <div className="sidebarRow">
        {src && <Avatar src ={src}/>}
        {/* This has to passed in capital because it is a component */}
        
        {Icon && <Icon/>} 
        <h4>{titles}</h4> 
    </div>
  )
}

export default SidebarRow