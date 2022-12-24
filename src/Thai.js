import React , {useState} from 'react'
import OurmealNavbar from './Components/OurmealNavbar';

import ThaiCuisine from '../src/Cuisine/thai.json'
import { FaArrowLeft } from "react-icons/fa"; 
import { Link ,useLocation } from 'react-router-dom'

export default function Thai() {

  const [thaiCuisine,setthaiCuisine] = useState(ThaiCuisine.results)
  console.log(thaiCuisine);

  return (
    <div>
      <OurmealNavbar/>
      <div className={`'m-0 p-0 ${'dark:bg-black'} '`}>
     <div className='container mx-auto '>
        <div className='pt-10'>
            <div className='flex justify-between'>
            <Link to='/' className='text-xl text-red-900 '><FaArrowLeft/></Link>
            </div>
            <h1 className='text-center mb-7 text-3xl text-red-900 font-black '>Thai Cuisine</h1>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 '>
        { thaiCuisine && thaiCuisine.map((cuisine)=>{
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
