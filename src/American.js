import React from 'react'
import { Link } from 'react-router-dom'
import OurmealNavbar from './Components/OurmealNavbar'
import AmericanCuisine from '../src/Cuisine/american.json'
import { FaArrowLeft } from "react-icons/fa"; 
import {useSelector} from 'react-redux'
export default function American() {
  const americanCuisine = AmericanCuisine.results
  const darkmode = useSelector ((state)=>state.darkmode.darkmode)
  return (
    <div className={`${darkmode && 'dark:bg-black '}`}>
      <OurmealNavbar/>
      <div>
     <div className='container mx-auto '>
        <div className='pt-10'>
           <div className='pl-3'>
           <Link to='/' className='text-xl text-red-900 '><FaArrowLeft/></Link>
           </div>
            <h1 className='text-center mb-7 text-3xl text-red-900 font-black '>American Cuisine</h1>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 '>
        { americanCuisine && americanCuisine.map((cuisine)=>{
            return(
                <div className='mb-7 w-80 bg-red-900 text-white rounded-xl mx-auto' key={cuisine.id} >
                    <img className='w-full rounded-xl' src={cuisine.image} alt='recipe'/>
                    <p className='px-2 mt-3 mb-2 text-xl'>{cuisine.title}</p>
                </div>
            )
        })} 
        </div>
    </div>
   </div>
      </div>
  )
}