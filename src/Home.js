import React,{useState,useContext } from 'react'
// 
import {Link,useNavigate} from 'react-router-dom'
// 
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
      <div className='container mx-auto pt-20 pb-48 flex justify-between  '>
          <div className='flex flex-col justify-between'>
              <button onClick={()=>setdarkmode(!darkmode)} className='text-2xl text-red-900 '>{!darkmode ?<MdOutlineDarkMode/> :<MdDarkMode/>}</button>      
              <div>
                <a className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`} onClick={()=>toOurProducts()}>Our Products</a>
                <a className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`} onClick={()=>toOurMeals()}>Our Products</a>
               
                {/* <Link to={{pathname:'/Ourproducts',state:[{darkmode_theme:darkmode}]}} className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`}>Our Products</Link> */}
                {/* <Link to={{pathname:'/Ourmeal',state:[{darkmode_theme:darkmode}]}}  className={`p-3 border border-red-900 font-serif rounded-lg mx-2 ${darkmode && 'dark:text-white'}`}>Our meal</Link> */}
              </div>
          </div>
         
          <div>
            <ReactCarousel/>  
          </div>      
                
     </div>
    </div>
  )
}