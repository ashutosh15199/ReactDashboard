import './App.css';
import {useState} from 'react';
import Header from "./component/Header"
import SideBar from "./component/SideBar"
import Home from "./component/Home"



function App() {
  const [openSidebarToggle,setOpenSidebarToggle]=useState(false);
  const OpenSidebar = ()=>{
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar}/>
     <SideBar OpenSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <Home/>
    </div>
  );
}

export default App;
