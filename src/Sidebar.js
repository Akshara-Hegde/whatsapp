import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { MoreVert, SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';



function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
          <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Avatar>
            <div className='sidebar_headerRight'>
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
                

            </div>

        </div>

        <div className='sidebar_search'>
          <div className='sidebar_searchContainer'>
            <SearchOutlined />
            <input placeholder='Search' type="text"></input>

          </div>
        </div>

      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

    </div>
  )
}

export default Sidebar