import React, { useEffect, useState, useRef } from 'react';
import Logo from '../Common/Logo';
import { data } from '../../data/dummyData';
import Button from '../Common/Button';
import './header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const headerRef = useRef(null);
    const headerData = data.header;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = headerRef.current?.offsetHeight - 8 || 0; 
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setToggle(false); // Close mobile menu on click
        }
    };

    return (
        <header ref={headerRef} className={`bg_dark_600 ${toggle ? 'hamburger_active' : ''} ${isScrolled ? 'active' : ''}`}>
            <div className="container bg_dark">
                <Logo className="main_logo" />
                <button className={`hamburger ${toggle ? 'active' : ''}`} id='hamburger' onClick={() => setToggle((prev) => !prev)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <nav className={`${toggle ? 'active' : ''}`}>
                    <ul className='navigation_list'>
                        {headerData?.navigation?.map((el, index) => (
                            <li key={index}>
                                <a href={el?.url} className='text_xxxxs' onClick={(e) => handleNavClick(e, el.url.replace('#', ''))}>
                                    {el?.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button className='btn_primary' type='link' href={headerData?.cta_button?.link}>
                        {headerData?.cta_button?.text}
                    </Button>
                    <a href="" className="login_link text_xxxxs">Login</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
