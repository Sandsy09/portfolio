import React, { useState } from 'react';
import Navigation from '../ui/Navigation';
import { Outlet } from 'react-router-dom';
import MobileNavigation from '../ui/MobileNavigation';

const Header = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    };

    return (
        <>
            <header className='sticky top-0 left-0 bg-(--background) text-(--foreground) z-50 shadow-md py-3 px-5 md:px-8 font-roboto-mono'>
                <div className='container mx-auto px-8'>
                    {/* Desktop Navigation */}
                    <Navigation toggleMenu={toggleMenu} isMobileMenuActive={isMobileMenuActive} />

                    {/* Mobile Navigation */}
                    <MobileNavigation toggleMenu={toggleMenu} isMobileMenuActive={isMobileMenuActive} />
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
