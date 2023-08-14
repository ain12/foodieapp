'use client';

import { AiFillHeart } from 'react-icons/ai';
import FooterList from './lists/FooterList';


const Footer = () => {
    let footerList = ["About", "Blog", "Careers", "Contact", "Help", "Privacy Policy", "Terms"];
    let footerList2 = ["Gift Cards", "Promos", "My Orders", "Nearby Restaurants", "All Cities"];


  return (
    <div className='footer'>
        <FooterList title='FoodieApp' cn='div-1' />
        <FooterList list={footerList} cn='div-2' />
        <FooterList list={footerList2} cn='div-3' />
        <div className="credits">
            <hr/>
           <p>Foddie App made with <AiFillHeart color='red'/> by Ainhoa</p>
        </div>
    </div>
  )
}

export default Footer;