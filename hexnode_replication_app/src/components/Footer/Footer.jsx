import React from 'react'
import { data } from '../../data/dummyData'
import Button from '../Common/Button';
import './footer.scss';

const Footer = () => {
    const footerData = data?.footer;
  return (
    <footer className='bg_white'>
        <div className="container">
            <ul className="footer_nav">
                {
                    footerData?.links?.map((el,index)=> <li key={index}><a href={el?.url} className='text__x' >{el?.text}</a></li>)
                }
            </ul>
            <span className="copyright text__x">
                {footerData?.copyright}
            </span>
        </div>
    </footer>
  )
}

export default Footer