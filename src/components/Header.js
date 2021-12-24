import React from 'react'
import Logo from '../images/logo.svg'
import './Header.css'

const Header = () => {
    const [navMinimized, setNavMinimized] = React.useState(false)
    const [navOpen, setNavOpen] = React.useState(false)
    const handleNavToggle = () => {
        setNavOpen(!navOpen)
    }
    const handleResize = () => {
        if (window.innerWidth <= 960) {
            setNavMinimized(true)
        } else {
            setNavMinimized(false)
        }
    }
    window.addEventListener('resize', handleResize)
    React.useEffect(handleResize, [])
    return (
        <nav className={navMinimized ? 'navigation-bar minimized' : 'navigation-bar'}>
            <div className="container d-flex justify-content-between align-items-center py-3">
                <a className="navbar--logo" href="/">
                    <img src={Logo} alt="logo" width='96' />
                </a>
                <button className="btn btn-secondary toggle-nav-menu" onClick={handleNavToggle}>=</button>
                <ul className={navOpen ? "main--nav navi open d-sm-flex" : "main--nav navi d-sm-flex"}>
                    <li onClick={handleNavToggle}>
                        <a href="/">Home</a>
                    </li>
                    <li onClick={handleNavToggle}>
                        <a href="#hero">About</a>
                    </li>
                    <li onClick={handleNavToggle}>
                        <a href="#discover">Discover</a>
                    </li>
                    <li onClick={handleNavToggle}>
                        <a href="#services">Services</a>
                    </li>
                </ul>
                <ul className="cta navi d-sm-flex align-items-center">
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <button className="btn btn-primary">Sign up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
