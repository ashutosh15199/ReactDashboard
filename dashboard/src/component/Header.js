import React from 'react';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
const Header = ({OpenSidebar})=>{
    return(
       <header className='header'>
        <div className='menu-icon'>
           <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        <input type='search' placeholder='search'/> 
       

        </div>
        <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>

        </div>
       </header>
    )
}
export default Header;