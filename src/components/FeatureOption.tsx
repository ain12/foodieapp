'use client';

import React from 'react'
import '../assets/css/feature.scss'

interface PropsFeatureOption {
    image: string;
    title: string;
    link: string;
}

const FeatureOption:React.FC<PropsFeatureOption> = ({
    image,
    title,
    link
}) => {
  return (
    <div className="feature">
        <div className='img'>
            <img src={image} alt='' />
        </div>
        <div className='information'>
            <h2>{title}</h2>
            <a href=''>{link}</a>
        </div>
    </div>
  )
}

export default FeatureOption