import {FiMenu, FiX} from 'react-icons/fi';
import { useState } from 'react';

const Header = ({navLinks}) => {
//creating useState for the navbar icons
  const [menuClicked, setMenuClicked]=useState(false);

  const onToggle=()=>{
    setMenuClicked(!menuClicked)
  }
  return (
    <div className="header">
        <span className="navbar-logo">TRAVEL</span>

                {menuClicked? (<span className='icon' onClick={onToggle}><FiX className='close' /></span>) : (<span className='icon' onClick={onToggle}><FiMenu className='menu'/></span>) }
            
            <ul className={menuClicked? 'navbar-list active' : 'navbar-list'}>
                {navLinks.map(navLink=>{
                  return (<li key={navLink.title}><a href={navLink.url}>{navLink.title}</a></li>)
                })}
            </ul>
    </div>
  )
}

export default Header
