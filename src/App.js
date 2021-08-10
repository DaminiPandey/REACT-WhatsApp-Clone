import Chat from "./Chat.js"
import './App.css';
import Sidebar from './Sidebar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import Login from "./Login"
import { useStateValue } from "./StateProvider.js";
//BEM naming convention

function App() {

  const [{ user }, dispatch]= useStateValue  ();


  return (
    <div className="app">
     {!user ?
     (
        <Login />
     ) :
     (<div className="app__body"> 
   <Router>
   <Sidebar />
     <Switch>
    
     
     <Route path="/rooms/:roomId">
      
      <Chat />
     </Route>
     <Route path="/">
      
      <Chat />
     </Route>
     
       
     </Switch>
   </Router>
    

    </div>
    )}
    </div>
  );
}


export default App;
