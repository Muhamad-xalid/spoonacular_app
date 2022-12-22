import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import data from './ourproducts.json'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Request() {
    console.log(data.results);
    const [darkmode,setdarkmode] = useState(false)
    const [recipes,setrecipes] = useState(data.results)

    
return (
   <div className={`'m-0 p-0 ${darkmode && 'dark:bg-black'} '`}>
     <div className='container mx-auto '>
        <div className='pt-10'>
            <div className='flex justify-between'>
            <Link to='/' className='text-xl text-red-900 '><FaArrowLeft/></Link>
            <button onClick={()=>setdarkmode(!darkmode)} className='text-2xl text-red-900 '>{!darkmode ?<MdOutlineDarkMode/> :<MdDarkMode/>}</button>
            </div>
            <h1 className='text-center mb-7 text-3xl text-red-900 font-black '>Our Products</h1>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 '>
        { recipes && recipes.map((recipe)=>{
            return(
                <div className='mb-7 w-80 bg-red-900 text-white rounded-xl mx-auto' key={recipe.id} >
                    <img className='w-full rounded-xl' src={recipe.image}/>
                    <p className='px-2 mt-3 mb-2 text-xl'>{recipe.title}</p>
                </div>
            )
        })} 
        </div>
    </div>
   </div>
  )
}

// &number=9
// https://api.spoonacular.com/recipes/random?apiKey=bebc4d84cf844c208923bc019574fff8&number=100