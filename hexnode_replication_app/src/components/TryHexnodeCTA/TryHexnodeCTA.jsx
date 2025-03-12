import React from 'react'
import { data } from '../../data/dummyData'
import Button from '../Common/Button';
import './tryHexnodeCTA.scss';

const TryHexnodeCTA = () => {
    const tryHexnodeCTAdata = data?.cta_section;
  return (
    <section className='try_hexnode bg_dark_600 bg_dark cmn_spacing text_center'>
        <div className="container">
            <h2 className='text_xl short_container_lg'>{tryHexnodeCTAdata?.title}</h2>
            <Button type='link' className='btn_primary lg text_xxs mt' href={tryHexnodeCTAdata?.cta_button?.link}>{tryHexnodeCTAdata?.cta_button?.text}</Button>
        </div>
    </section>
  )
}

export default TryHexnodeCTA