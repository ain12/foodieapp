import React, {useState, useEffect} from 'react'
import '../assets/css/navbar.scss'
import Button from './buttons/Button';
import { CiUser } from 'react-icons/ci';


function Navbar() {

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, [])

  return (
    <nav className={color ? 'bg active' : 'bg'}>
      <div>
        <h1>FoodieApp</h1>
        <div className='btn-box'>
          <Button text='Log In' icon={CiUser}/>
          <Button text='Sign Up' cn='register'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;