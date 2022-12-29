import React ,{useState} from 'react'
import data from './ourproducts.json'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; 
import {useSelector} from 'react-redux'
export default function Ourproducts() {
    const darkmode = useSelector ((state)=>state.darkmode.darkmode)
    const recipes = data.results
    const [searchInput, setSearchInput] = useState("");
return (
<div className={`'m-0 p-0 ${darkmode && 'dark:bg-black'} '`}>
     <div className='container mx-auto '>
        <div className='px-5  sm:px-14 pt-10 flex justify-between'>
            <Link to='/' className={`pl-3 text-xl text-red-900`}><FaArrowLeft/></Link>
            <h1 className={`text-center mb-7 text-3xl text-red-900 hidden lg:block`}>Our Products</h1>
            <input autoFocus={true}  type="text" placeholder="Search for your food"
className={` text-white p-2 mb-7 text-xl rounded bg-red-900 placeholder:text-white ${darkmode && 'dark:bg-white dark:text-red-900 placeholder:text-red-900'}`}
            onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}/>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 '>
        { recipes.filter(data=>{
                    if(searchInput === ''){
                        return data
                    }
                    if (data.title.toLowerCase().includes(searchInput.toLowerCase())) {
                      return data  
                    } else{
                        return ''
                    }
                }).map((recipe)=>{
            return(
                <div className='mb-7 w-80 bg-red-900 text-white rounded-xl mx-auto' key={recipe.id} >
                    <img className='w-full rounded-xl' src={recipe.image} alt='recipe'/>
                    <p className='px-2 mt-3 mb-2 text-xl'>{recipe.title}</p>
                </div>
            )
        }) } 
        </div>
    </div>
   </div>
  )
}