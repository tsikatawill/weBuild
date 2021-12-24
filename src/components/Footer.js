import React from 'react'
import Logo from '../images/logo.svg'
import Facebook from '../images/facebook1.svg'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin-circle.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container py-5 text-center">
                <img src={Logo} alt="logo" />
                <ul className='d-flex justify-content-between my-4'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#hero">About</a>
                    </li>
                    <li>
                        <a href="#discover">Discover</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                </ul>
                <div className="socials">
                    <a href="https://www.facebook.com" target='_blank' rel="noreferrer">
                        <img className="px-2" src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.github.com" target='_blank' rel="noreferrer">
                        <img className="px-2" src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com" target='_blank' rel="noreferrer">
                        <img className="px-2" src={Linkedin} alt="Linkedin" />
                    </a>
                </div>

                <p className="copy my-4">Designed by <a href="https://www.github.com/tsikatawill" target='_blank' rel="noreferrer" className='text-primary'>Willman</a> &copy; 2021</p>
            </div>
        </footer>
    )
}

export default Footer
