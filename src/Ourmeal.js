import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Ourmeal(props) {
  
  let location = useLocation();
    console.log(location.state.darkmode);
    const darkmode = location.state.darkmode

  
  
  return (
    <div className={`'  ${darkmode && 'dark:bg-black text-white'} '`}>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
        <div>Ourmeal</div>
    </div>
  )
}



