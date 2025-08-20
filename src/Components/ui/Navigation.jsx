import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '/logo_large.png';

const navLinks = [
    // { 'name': 'Home', 'href': '/' },
    { 'name': 'About', 'href': '#about' },
    { 'name': 'Experience', 'href': '#experience' },
    { 'name': 'Projects', 'href': '#projects' },
    { 'name': 'Contact', 'href': '#contact' },
    // { 'name': 'Blog', 'href': '/blog' },
]

const Navigation = ({ toggleMenu, isMobileMenuActive }) => {
    const location = useLocation();
    const toggleClass = isMobileMenuActive ? 'hamburger-active' : ''

    const isActive = (href) => {
        if (href.startsWith('#')) return false;
        return location.pathname === href;
    };

    const handleScrollToSection = (sectionRef) => {
        const sectionName = sectionRef.substring(1);
        const section = document.getElementById(sectionName)
        if (section) {
            section.scrollIntoView();
        };
    };

    return (
        <nav className='flex justify-between items-center min-w-[150px]'>
            <NavLink to='/' className='flex items-center'>
                <img className='h-10 w-10' src={logo} alt='Ice Cream Logo' />
            </NavLink>
            <div id='screen-nav' className='flex items-center space-x-6'>
                {
                    navLinks.map((item) => {
                        return (
                            <NavLink
                                key={`link-${item.name}`}
                                to={item.href}
                                className={`relative font-thin text-sm hover-underline-animation left ${isActive(item.href) ? 'active-link' : ''
                                    }`}
                                onClick={() => handleScrollToSection(item.href)}
                                end
                            >
                                {item.name}
                            </NavLink>
                        )
                    })
                }
            </div>
            <div
                className={`hamburger z-500 ${toggleClass}`}
                onClick={toggleMenu}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )
};

export default Navigation;
