import React, { useState } from 'react';
import { data } from '../../data/dummyData';
import './multiPlatform.scss';

const MultiPlatform = () => {
    const multiPlatformData = data.multi_platform;
    const [activeIndex, setActiveIndex] = useState(0); // Default to first item

    const handleAccordionClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="multi_selection_data bg_light cmn_spacing" id='platforms'>
            <div className="container">
                <div className="short_cnt text_center">
                    <h2 className='text_lg mb2'>{multiPlatformData?.title}</h2>
                    <p className='text_base'>{multiPlatformData?.description}</p>
                </div>
                <div className="custom_accordion">
                    {/* Desktop Image */}
                    <div className="left">
                        {multiPlatformData?.supported_platforms?.platforms?.map((el, index) => (
                            <figure key={index} className={`${activeIndex === index ? "active" : ""} cmn_shadow`}>
                                <img src={el?.image?.src} alt={el?.title} className="img_full" loading="lazy" />
                            </figure>
                        ))}
                    </div>
                    <div className="right">
                        {multiPlatformData?.supported_platforms?.platforms?.map((el, index) => (
                            <div className={`accordion_item ${activeIndex === index ? "active" : ""}`} key={index}>
                                {/* Mobile Image */}
                                <figure className={` cmn_shadow mobile_img ${activeIndex === index ? "active" : ""}`}>
                                    <img src={el?.image?.src} alt={el?.title} className='img_full'loading="lazy" />
                                </figure>
                                <div className='item_short'>
                                    <button
                                        className={`accordion_btn ${activeIndex === index ? "active" : ""}`}
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <h3 className='text_sm'>{el?.title}</h3>
                                    </button>
                                    <div className={`accordion_cnt ${activeIndex === index ? "open" : ""}`}>
                                        <p className='text_base'>{el?.description}</p>
                                        <a href={el?.cta_link?.url} className='text_xs text_primary'>{el?.cta_link?.text}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultiPlatform;
