import React from 'react'
import { data } from '../../data/dummyData'
import './comprehensiveDevicemanagement.scss';

const ComprehensiveDeviceManagement = () => {
    const comprehensiveDeviceManagement = data?.comprehensive_device_management;
  return (
    <section className="device_management cmn_spacing bg_white">
        <div className="container">
            <h2 className='text_lg mb short_container text_center'>{comprehensiveDeviceManagement?.title}</h2>
            <ul className="device_management_list">
                {
                    comprehensiveDeviceManagement?.list?.map((el,index)=>{
                        return(
                            <li key={index}>
                                <div className="cnt">
                                    <figure><img className='img_full' src={el?.image?.src} alt={el?.image?.alt} /></figure>
                                    <h3 className='text_md lh_cmn mb'>{el?.title}</h3>
                                    <p className='text_base'>{el?.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default ComprehensiveDeviceManagement