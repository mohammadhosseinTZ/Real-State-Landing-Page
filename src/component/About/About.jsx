import React from 'react'
import aboutStyle from './aboutStyle.module.scss'
import buldingImg from './Group 2.png'
export default function About() {
  return (
    <div className={aboutStyle.container}>
      <div>
        <span>Welcome to Realstate</span>
        <h1>Manage Your Property</h1>
        <span>Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</span>
        <div>
          <input type="text" placeholder='Enter your email' />
          <button>Get a Quote</button>
        </div>
      </div>
      <div>
        <img src={buldingImg} alt="buldingImg" />
      </div>
    </div>
  )
}
