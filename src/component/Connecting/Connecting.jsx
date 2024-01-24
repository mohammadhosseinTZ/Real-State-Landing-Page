import React from 'react'
import connectingStyle from './ConnectingStyle.module.scss'
export default function Connecting({img , title}) {
  return (
    <div className={connectingStyle.container}>
        <div><img src={img} alt="" /></div>
        <span>{title}</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, dolorum </p>
    </div>
  )
}
