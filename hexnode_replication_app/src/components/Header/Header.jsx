import React, { useEffect, useState } from 'react';
import Logo from '../Common/Logo';
import { data } from '../../data/dummyData';
import Button from '../Common/Button';
import './header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const headerData = data.header;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg_dark_600 ${isScrolled ? 'active' : ''}`}>
            <div className="container bg_dark">
                <Logo className="main_logo" />
                <button className={`hamburger ${toggle ? 'active' : ''}`} id='hamburger' onClick={() => setToggle((prev) => !prev)}>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <nav className={`${toggle ? 'active' : ''}`}>
                    <ul className='navigation_list'>
                        {headerData?.navigation?.map((el, index) => (
                            <li key={index}><a href="" className='text_xxxxs'>{el}</a></li>
                        ))}
                    </ul>
                    <Button className='btn_primary' type='link' href={headerData?.cta_button?.link}>
                        {headerData?.cta_button?.text}
                    </Button>
                    <a href="" className="login_link text_xxxxs">Login</a>
                    {/* hamburger */}

                </nav>
            </div>
        </header>
    );
};

export default Header;
