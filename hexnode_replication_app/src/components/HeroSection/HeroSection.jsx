import React from 'react'
import { data } from '../../data/dummyData'
import { EmailCapture } from '../Common/EmailCapture';
import './heroSection.scss';

const HeroSection = () => {
    const heroSectionData = data.hero_section;
    return (
        <section className="hero bg_dark_600">
            <div className="container">
                <div className="cnt">
                    <div>
                        <span className='dim text_xxxs'>{heroSectionData?.title_supporter}</span>
                        <h1 className='text_xl'>{heroSectionData?.title}</h1>
                        <p className='text_base'>{heroSectionData?.description}</p>
                    </div>
                    <EmailCapture placeholder={heroSectionData?.cta?.placeholder} buttonText={heroSectionData?.cta?.button_text} />
                </div>
                <div className="image_wrap">
                    {/* Black and white background */}
                    <img
                        src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg"
                        alt="Hexnode UEM"
                        className="w-full h-auto filter grayscale"
                        loading="lazy"
                    />
                    {/* Color image with clipping */}
                    <img
                        src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/baner.png"
                        alt="Hexnode UEM Color"
                        className="absolute top-10 left-10 w-[40%] h-auto clip-path-circle"
                        loading="lazy"
                    />
                    <ul className="badges_wrap">
                        {
                            heroSectionData?.image?.badges?.map((el, index) => <li key={index}><div className="badge_cnt text_xs">{el}</div></li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

