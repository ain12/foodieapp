'use client';

import React from 'react'
import '../assets/css/promodeal.scss';
import Button from './buttons/Button';
import {IoFastFoodSharp} from 'react-icons/io5';

const PromoDeal = () => {
  return (
    <div className='promo-section'>
        <div className='promo-content'>
            <h1><IoFastFoodSharp color='red' /> Up to 50% off in promos <IoFastFoodSharp color='red'/></h1>
            <h2>Grab the deals and save more</h2>
            <p>Explore top deals and promo from your favorite restaurants in the FoodieApp.</p>
            <Button text="View all"/>
        </div>
    </div>
  )
}

export default PromoDeal;