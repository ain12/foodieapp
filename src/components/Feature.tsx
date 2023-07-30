'use client';

import React from 'react'
import FeatureOption from './FeatureOption';
import '../assets/css/feature.scss';
import Deliver from '../assets/img/pexels-mart-production-7706441.jpg';
import Restaurant from '../assets/img/pexels-pixabay-511763.jpg';
import PhoneApp from '../assets/img/pexels-tim-samuel-5838215.jpg';

const Feature = () => {
  return (
    <div className='feature-section'>
        <div>
            <FeatureOption image={Deliver} title="Become a delivery driver" link="Join us and work anytime, anywhere. You choose!"/>
            <FeatureOption image={Restaurant} title="Join your restaurant" link="Add your restaurant and grow your business with us"/>
            <FeatureOption image={PhoneApp}  title="Experience the best with our app" link="Download our app"/>
        </div>
    </div>
  )
}

export default Feature