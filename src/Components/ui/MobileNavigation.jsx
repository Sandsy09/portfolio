import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
    // { 'name': 'Home', 'href': '/' },
    { 'name': 'About', 'href': '#about' },
    { 'name': 'Experience', 'href': '#experience' },
    { 'name': 'Projects', 'href': '#projects' },
    { 'name': 'Contact', 'href': '#contact' },
    // { 'name': 'Blog', 'href': '/blog' },
]

const MobileNavigation = ({ toggleMenu, isMobileMenuActive }) => {
    const location = useLocation();
    const toggleClass = isMobileMenuActive ? '' : 'translate-x-full';

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
        toggleMenu();
    };

    return (
        <div id='mobile-nav' className={`fixed z-100 h-screen bg-(--background) text-(--foreground) pt-20 inset-0 md:hidden transition-transform duration-900 ease-in-out ${toggleClass}`}>
            <div className='flex flex-col mx-auto items-center justify-center gap-10 mt-20'>
                {
                    navLinks.map((item) => (
                        <NavLink
                            key={`mobileLink-${item.name}`}
                            to={item.href}
                            className={`relative font-thin text-md hover-underline-animation left ${isActive(item.href) ? 'active-link' : ''
                                }`}
                            onClick={() => handleScrollToSection(item.href)}
                            end
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default MobileNavigation;
