import React from 'react';
import './CartButton.css';

// import {BiCart} from 'react-icons/bi';


const Button = (props) => {
  return (
    <div>
        <button className='btn' >

         <span> {props.img} </span>
            
           <span> {props.title} </span>
           
            <button className='btn-1'>{props.value}</button>  
            
        </button>
    </div>
  )
}

export default Button