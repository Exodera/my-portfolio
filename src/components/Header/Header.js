import {HiMenu} from  'react-icons/hi'
import {React, useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"


const Header = () => {
  const [expandNavBar, setExtendNavBar] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    setExtendNavBar(false)
  },[location])

  return (
    <div>
      <h1 className='header-text'>My Portfolio</h1>
      <div className='navbar' id={expandNavBar ? "open" : "close"}>

          
          <div className='links'>
              <Link className='link' to = '/'>Home</Link>
              <Link className='link' to = '/Projects'>Projects</Link>
              <Link className='link' to = '/Experience'>Experience</Link> 
          </div>
        </div>

          <div className='toggle'>
            <button className='toggle-btn' onClick={()=>{
              setExtendNavBar((prev) => !prev) 
            }}>
              <HiMenu color='white' size={"1.5rem"}/>
            </button>
          </div>
      </div> 
       

    
  )
}

export default Header