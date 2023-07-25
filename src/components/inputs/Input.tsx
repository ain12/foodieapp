'use client';

import React from 'react'
import { IconType } from "react-icons"
import '../../assets/css/inputs.scss'

interface InputProps {
    text?: string;
    type: string;
    icon?: IconType;
    cn?: string;
}


const Input:React.FC<InputProps> = ({
    text,
    type,
    icon: Icon,
    cn
}) => {
  return (
    <div className={cn}>
        {Icon && <Icon size={24} className="icon"/>}
        <input type={type} placeholder={text} />
    </div>
  )
}

export default Input