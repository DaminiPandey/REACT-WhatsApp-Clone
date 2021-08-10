import { Avatar } from "@material-ui/core";
import db from "./firebase.js";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Link, useParams } from "react-router-dom";
function SidebarChat({id , name, addNewChat}){
    const {roomId}=useParams();
    const [seed,setSeed]=useState("");
    const [messages,setMessages]=useState([]);

   useEffect(()=>{
      if(id){
          db.collection("rooms").doc(id).collection("messages")
          .orderBy("timestamp","desc").onSnapshot(snapshot=>(
              setMessages(snapshot.docs.map((doc)=>doc.data()))
          ));
      }
   },[id]);
     
   useEffect(() => {
      
      setSeed( Math.floor(Math.random() * 5000) );

   },[]);
   function createChat(){
       const roomName=prompt("Please Enter name for chat");
       if(roomName){
           //Do some clever database stuff

           db.collection("rooms").add({
               name:roomName,
        })
       }
   }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
              
              <div className="sidebarChat">
           <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`}/>
           <div className="sidebarChat__info"> 
           <h2>{name}</h2>
           <p>{messages[0]?.message.slice(0, 24) } </p>
           </div>
        </div>
 
        </Link>
        
    ) : 
    (
        <div onClick={createChat} className="sidebarChat"> 
          <h2>Create a new chat</h2>
        </div>
    )
}
export default SidebarChat;