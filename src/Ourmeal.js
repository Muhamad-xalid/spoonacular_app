import React from 'react'
import OurmealNavbar from './Components/OurmealNavbar';
import {useSelector} from 'react-redux'
export default function Ourmeal() {
  const darkmode = useSelector ((state)=>state.darkmode.darkmode)
  return (
    <div className={`${darkmode && 'dark:bg-black text-white'} `}>
        <OurmealNavbar darkmodeTheme={darkmode}/>
    </div>
  )
}



