import React from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiHamburger} from 'react-icons/gi'
import {GiNoodles} from 'react-icons/gi'
import {GiChopsticks} from 'react-icons/gi'
import { Link } from 'react-router-dom'
export default function OurmealNavbar() {
  return (
    <div className=''>
        <div className='flex  justify-center py-5 '>
            <div className='md:flex'>
                <Link to='/Ourmeal/American' className='mx-5 mb-2 flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                    <div>American</div>
                    <GiHamburger/>
                </Link>
                <Link to='/Ourmeal/Italian' className='mx-5 flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                    <div>Italian</div>
                    <CiPizza/>
                </Link>
            </div>

            <div className='md:flex'>
                <Link to='/Ourmeal/Japanese' className='mx-5 mb-2  flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                    <div>Japanese</div>
                    <GiChopsticks/>
                </Link>
                <Link to='/Ourmeal/Thai' className='mx-5  flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                    <div>Thai</div>
                    <GiNoodles/>
                </Link>
            </div>
        </div>
    </div>
  )
}
