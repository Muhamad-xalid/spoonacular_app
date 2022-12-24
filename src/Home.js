import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom' 
import ReactCarousel from './Components/ReactCarousel'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
export default function Home() {
  const navigate = useNavigate()
  const toOurProducts=()=>{
    navigate('/Ourproducts',{state:{darkmode:darkmode}});
      }
      const toOurMeals=()=>{
    navigate('/Ourmeal',{state:{darkmode:darkmode}});
      }
  const [darkmode,setdarkmode] = useState(false)
  return (
    <div className={`w-full h-3/4 ${darkmode && 'dark:bg-black'}`}>
      <h1 className={`text-center pt-4 text-3xl font-bold ${darkmode && 'dark:text-white'}`}>Spoonacular</h1>
      <div className='container mx-auto pt-20 pb-4 flex flex-col items-center md:flex-row'>
          <div className=' w-full flex justify-around mb-10 md:flex-col md:h-72 md:justify-between'>
              <button onClick={()=>setdarkmode(!darkmode)} className={`text-2xl  ${darkmode && 'dark:text-white'} `}>{!darkmode ?<MdOutlineDarkMode/> :<MdDarkMode/>}</button>      
              <div className='md:flex flex-col md:h-32 justify-around'>
                <a className={`cursor-pointer p-3 text-center border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`} onClick={()=>toOurProducts()}>Our Products</a>
                <a className={`cursor-pointer p-3 text-center border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`} onClick={()=>toOurMeals()}>Our Meal</a>  
               </div>
          </div>
          <div className='mx-10'>
            <ReactCarousel/>  
          </div>      
     </div>
    </div>
  )
}