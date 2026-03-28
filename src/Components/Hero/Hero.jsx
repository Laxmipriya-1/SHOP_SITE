import React from 'react'
import hero_img from '../../assets/cloth13.jpg'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className='hero_left'>
          <h1>Unleash Premium Clothing Quality</h1>
          <p>This shopping site offers trendy clothes, affordable prices, fast delivery, easy returns, secure payments, and a wide variety for everyone.</p>
          {/* <button>Shop Our Collections</button> */}
          <button>
           <a href="#products">Shop Our Collections</a>
          </button>
        </div>
        <div className='hero_right'>
          <img src={hero_img} alt='hero_img'/>
        </div>
      </div>
    </div>
  )
}

export default Hero