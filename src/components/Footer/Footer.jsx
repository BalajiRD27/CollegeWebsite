import React from 'react'
import './footer.css'

const Footer = () => {

    const year=new Date().getFullYear()
  return (
    <div className='footer'>
        <p>©{year} MYUNIV. Copyrights reserved</p>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
        </ul>
    </div>
  )
}

export default Footer