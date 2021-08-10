import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, {useState,useEffect} from 'react';
import "./Sidebar.css";
import db from "./firebase.js"
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';
function Sidebar(){

        const[{ user },dispatch]=useStateValue();
    const [rooms,setRooms] = useState([])
    useEffect(()=>{
      const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=>{
       setRooms(snapshot.docs.map(doc=>({
           id:doc.id,
           data:doc.data(),
       })))
   })
   return()=>{
       unsubscribe();
   }
    },[]);
    


    return(
        
       
        <div className="sidebar">
        
        <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
            <div className="sidebar__headerRight">
            
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
                
            </div>
        </div>
        <div className="sidebar__search">
         <div className="sidebar__searchContainer">
           
           <SearchOutlined />
           <input type="text" placeholder="Search or start new chat" />

         </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat addNewChat />
           {rooms.map((room)=>{
               return(<SidebarChat key={room.id} id={room.id} name={room.data.name} />)
           })}
            
        </div>
        </div>
        
        
    )
}

export default Sidebar;