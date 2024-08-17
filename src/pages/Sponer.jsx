import React from 'react'
import { Header } from '../components/Header'
import lady from '../assets/lady.svg'
import heart from '../assets/heart.svg'
import { Image } from 'react-bootstrap'
export const Sponer = () => {
    return (
        <div>
            <Header
                isVideo={false}
                src={lady}
            />

            <p className='faq-title'>Sponser</p>

            <div className='sponer-container'>
                <div className='sponer-icon'>
                    <Image src={heart} />
                </div>
                <div className='sponer-content-container'>
                    <div className='sponer-content'>
                        <p className='support'>We are currently seeking support for our initiative!</p>
                        <p className='donate'>If you would like to donate, please use the following PayPal link</p>
                        <div className='email-container '>
                            <p className='email'>
                                admin-pressionc@gmail.com
                            </p>
                        </div>
                        <p className='donate'>
                            Your contribution is greatly appreciated and will make a significant difference.
                        </p>
                        <p className='thank'>Thank you for your generosity!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
