import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
         <SidebarRow 
        src={user.photoURL}
        titles={user.displayName}/>
        <SidebarRow
            Icon = {LocalHospitalIcon}
            titles = "COVID-19 information center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} titles="Pages"/>
        <SidebarRow Icon={PeopleIcon} titles="Friends"/>
        <SidebarRow Icon={ChatIcon} titles="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} titles="MarketPlace"/>
        <SidebarRow Icon={VideoLibraryIcon} titles="videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} titles="MarketPlace"/>

    </div>
  )
}

export default Sidebar