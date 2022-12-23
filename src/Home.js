import React,{useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import ReactCarousel from './Components/ReactCarousel'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


export default function Home() {
  const [darkmode,setdarkmode] = useState(false)
  return (
    <div className={`w-full h-3/4 ${darkmode && 'dark:bg-black'}`}>
      <div className='container mx-auto pt-20 pb-48 flex justify-between  '>
          <div className='flex flex-col justify-between'>
              <button onClick={()=>setdarkmode(!darkmode)} className='text-2xl text-red-900 '>{!darkmode ?<MdOutlineDarkMode/> :<MdDarkMode/>}</button>      
              <div>
                <Link to='/Ourproducts' className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`}>Our Products</Link>
                <Link to='/Ourmeal' className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`}>Our meal</Link>
              </div>
          </div>
         
          <div>
            <ReactCarousel/>  
          </div>      
                
     </div>
    </div>
  )
}