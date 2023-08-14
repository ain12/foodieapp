'use client';

import React from 'react';
import { FaInstagramSquare, FaFacebook, FaTiktok} from 'react-icons/fa';
import '../../assets/css/footerlist.scss';

interface PropsFooterList {
    list?: string[];
    title?: string;
    cn?: string;
}

const FooterList:React.FC<PropsFooterList> = ({
    list,
    title,
    cn
}) => {
  return (
    <div className={cn}>
        <h3>{list ? "" : title}</h3>
        <ul>
            {list?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {list ? ""  :  (
            <div className='social-icons'>
                <FaInstagramSquare style={{cursor: 'pointer'}} size={27}/>
                <FaFacebook style={{cursor: 'pointer'}} size={27}/>
                <FaTiktok style={{cursor: 'pointer'}} size={27}/>
            </div>
        )}
    </div>
  )
}

export default FooterList