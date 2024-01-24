import React from 'react'
import Header from './component/Header/Header'
import About from './component/About/About'
export default function App() {
  return (
    <div>
      <Header/>
      <About/>
      <span style={{margin:'58px 0 16px' , textAlign:'center' , display:'block' , fontSize:16}}>Three steps. Three minutes.</span>
      <h2 style={{fontSize:50 , textAlign:'center' , margin:0}}>Everything should be this easy.</h2>
    </div>
  )
}
