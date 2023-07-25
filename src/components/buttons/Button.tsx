'use client';

import React from 'react'
import { IconType } from "react-icons"
import '../../assets/css/buttons.scss'

interface ButtonProps {
    text: string;
    icon?: IconType;
    cn?: string;
}

const Button:React.FC<ButtonProps> = ({
    text,
    icon: Icon,
    cn
}) => {
  return (
    <button className={cn && cn}>
      {Icon && <Icon size={24} />}
      {text}
    </button>
  )
}

export default Button;