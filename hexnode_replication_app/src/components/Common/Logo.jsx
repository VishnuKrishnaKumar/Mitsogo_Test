import React from 'react'

const Logo = ({src , alt ='logo' , href , className}) => {
  return (
    <>
    <a href="" className={`${className || ''} logo`}>
        { src ? <img src={src} alt={alt} className='img_full' loading="lazy" /> : <span>HexNode</span>}
    </a>
    </>
  )
}

export default Logo