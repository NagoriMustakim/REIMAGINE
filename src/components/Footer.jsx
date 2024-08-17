import React from 'react'
import { Image } from 'react-bootstrap'
import footerlogo from '../assets/footer-logo.svg'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
      <p className='res footer-txt'>© 2024 pressionC. All Rights Reserved.</p>
      <Image src={footerlogo} alt='pressionC' />
      <div className='links footer-txt'>
        <Link to='policy'>Privacy Policy | </Link>
        <Link to='service'>Terms of Service</Link>
      </div>
    </div>
  )
}
