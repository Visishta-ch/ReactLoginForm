import React from 'react';
import './Button.css';

// import {BiCart} from 'react-icons/bi';


const Button = (props) => {
  return (
    <div>
        <button className='btn'>
    
            {props.title} 
            {props.img}
            
        </button>
    </div>
  )
}

export default Button