import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>Home
        <Link to='/Request' className='p-2 bg-cyan-800 text-white'>Go</Link>
        <Link to='/Ourmeal' className='p-2 bg-cyan-800 text-white'>Our meal</Link>
    </div>
  )
}