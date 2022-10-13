import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            <Link className='link' to = '/'>Home</Link>
            <Link className='link' to = '/Projects'>Projects</Link>
            <Link className='link' to = '/Experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Header