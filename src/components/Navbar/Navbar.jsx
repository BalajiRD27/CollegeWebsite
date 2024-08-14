import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [scroll,setScroll]=useState(false)
  const [menu,setMenu]=useState(false)
  useEffect(()=>
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setScroll(true) :setScroll(false)
    })
    ,[])

    const toggleMenu=()=>{
      setMenu(!menu)
 }
  return (
    <div>
        <nav className={scroll ? 'container dark-nav' : 'container'}>
        <h1>MYUNIV</h1>
        <ul className={menu? '' : 'hide-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-250} duration={500} >Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-140} duration={500} >About</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500} >Campus</Link></li>
            <li><Link to='test' smooth={true} offset={-250} duration={500} >Testimonials</Link></li>
            <li className='btn'><Link to='contact' smooth={true} offset={-250} duration={500} >Contact Us</Link></li>
      </ul>
      <img onClick={toggleMenu} className='menu' src={menu_icon} alt="" />
      </nav>
    </div>
  )
}

export default Navbar