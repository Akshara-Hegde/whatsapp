import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./Chat.css"
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

function Chat({messages}) {
  const [input,setInput] = useState("");
  const sendMessage = async(e) => {
    e.preventDefault();
    // console.log(input)

      await axios.post("/messages/new", {
      message: input,
      name: "demo",
      timeStamp: "now",
      received: true,
    })
    setInput("");
  }; 
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar />
        <div className='chat_headerInfo'>
          <h3> Room name</h3>
          <p>Last seen at ..</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map((message) => (          
             <p className={`chat_message ${message.received && 'chat_reciever'}`}>
            
             <span className='chat_name'>{message.name}</span>
             {message.message}
             <span className='chat_timestamp'>{message.timeStamp}</span>      
  
           </p>
        ))}    
       
        
      </div>
      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange = {(e)=> {setInput(e.target.value)
          console.log(input);
          }}
           placeholder='Type a message' type="text" />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat