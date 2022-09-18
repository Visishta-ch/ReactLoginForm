import React from 'react'
import mealsImage from '../../assets/image1.jpg';

import CartButton from './CartButton';

import {BiCart} from 'react-icons/bi';


import classes from './Header.module.css'
const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Favor FooDs</h1>
            {/* <button>Cart</button> */}

            <CartButton  img = <BiCart /> 
                    title='Your Cart' 
                    value = '0'
                   >
               
        
            </CartButton>
        </header>
        <div className={classes['main-image']}>
            <img src = {mealsImage} alt = 'Meals'/>
        </div>
    </>
  )
}

export default Header