import React from 'react'
import {Link} from 'react-router-dom' 
import ReactCarousel from './Components/ReactCarousel'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {useSelector,useDispatch} from 'react-redux'
import {DarkMode} from './redux/darkmode'

export default function Home() {
  const darkmodee = useSelector ((state)=>state.darkmode.darkmode)
  const dispatch = useDispatch()
  return (
    <div className={`w-full pb-36 text-red-900 ${darkmodee && 'dark:bg-black'}`}>
      <h1 className={`text-center pt-4 text-3xl font-bold `}>Spoonacular</h1>
      <div className='container mx-auto pt-20 pb-4 flex flex-col items-center md:flex-row'>
          <div className=' w-full flex justify-around mb-10 md:flex-col md:h-72 md:justify-between'>
              <button onClick={()=>dispatch(DarkMode())} className={`text-2xl`}>{!darkmodee ?<MdOutlineDarkMode/> :<MdDarkMode/>}</button>      
              <div className='md:flex flex-col md:h-32 justify-around'>
                <Link to='/Ourproducts' className={`cursor-pointer p-3 text-center border border-red-900 font-serif rounded-lg mx-2`} >Our Products</Link>
                <Link to='/Ourmeal' className={`cursor-pointer p-3 text-center border border-red-900 font-serif rounded-lg mx-2 `} >Our Meal</Link>  
               </div>
          </div>
          <div className='mx-10'>
            <ReactCarousel/>
          </div>      
     </div>
    </div>
  )
}