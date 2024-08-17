import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import logo from '../assets/logo.svg'
import './styles.css'
import { Link } from 'react-router-dom'

export const Header = ({ isVideo, src }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const downloadHandler = () => {
        window.location.href = '/'
    }
    return (
        <>
            {
                isVideo ? (
                    <div className='video-wrapper'>
                        <video src={src} autoPlay muted loop playsInline></video>
                    </div>
                ) :

                    (
                        src ?
                            <Image src={src} alt='PressionC-Client' className='image-wrapper' />
                            : null
                    )
            }

            <div className='header-container' style={src ? null : { backgroundColor: '#2b2d28' }}>
                <Link to='/'><Image src={logo} className='header-logo ' /></Link>

                <div className={`nav ${isOpen ? 'open' : ''}`}>
                    <Link to='/' className='nav-link'>Product</Link>
                    <Link to='/sponser' className='nav-link'>Sponser</Link>
                    <Link to='/faq' className='nav-link'>FAQ's</Link>
                </div>

                <button className='btn btn-download' onClick={downloadHandler}>Download</button>

                <div className='hamburger-menu' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
        </>
    )
}
