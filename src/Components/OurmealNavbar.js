import React from 'react'

import {CiPizza} from 'react-icons/ci'
import {GiHamburger} from 'react-icons/gi'
import {GiNoodles} from 'react-icons/gi'
import {GiChopsticks} from 'react-icons/gi'
import { Link } from 'react-router-dom'

export default function OurmealNavbar() {
  return (
    <div className=''>
        <div className='container mx-auto p-5 flex justify-center'>
            <Link to='/Ourmeal/American' className='mx-5  flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                <div>American</div>
                <GiHamburger/>
            </Link>
            <Link to='/Ourmeal/Italian' className='mx-5 flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                <div>Italian</div>
                <CiPizza/>
            </Link>
            <Link to='/Ourmeal/Japanese' className='mx-5  flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                <div>Japanese</div>
                <GiChopsticks/>
            </Link>
            <Link to='/Ourmeal/Thai' className='mx-5  flex flex-col items-center justify-center  bg-red-900 w-20 h-20  text-white rounded-full'>
                <div>Thai</div>
                <GiNoodles/>
            </Link>
    </div>
    </div>
  )
}
