import React from 'react'
import { data } from '../../data/dummyData'
import Logo from '../Common/Logo';
import './features.scss';

const Features = () => {
    const featuresData = data?.why_hexnode;
    return (
        <section className="features bg_light cmn_spacing">
            <div className="container">
                <h2 className='text_lg text_center mb'>{featuresData?.title}</h2>
                <div className="cnt_wrap">
                    <ul className="features_list">
                        {
                            featuresData?.features?.map((el, index) => {
                                return (
                                    <li key={index}>
                                        <div className="features_cnt">
                                            <div className="title">
                                                <span dangerouslySetInnerHTML={{ __html: el?.icon }} />
                                                <h3 className='text_sm'>{el?.title}</h3>
                                            </div>
                                            <p className='text_base'>{el?.description}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="logo_wrap">
                        <span className='left_border'></span>
                        <span className='right_border'></span>

                        <Logo className="logo_center" src={featuresData?.logoImage?.src} alt={featuresData?.logoImage?.alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features