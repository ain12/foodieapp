import React from 'react'
import { BiSolidMap } from 'react-icons/bi'
import '../assets/css/home.scss'
import Button from './buttons/Button'
import Input from './inputs/Input'

function Home() {
  return (
    <div className='bg-img'>
        <div className='content'>
            <h1>Get your favorite food delivered to you</h1>
            <div className='box'>
              <Input text='Enter delivery address' type='text' cn='input' icon={BiSolidMap}/>
              <Button text="Find food" cn="find"/>
            </div>
            <p>Do you want to see your saved address? <a href="">Login</a></p>
        </div>
    </div>
  )
}

export default Home