import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from 'react-router-dom'

function Layout({ title, children }) {
  return (
    <div className="max-w-7xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 my-10">
        <Link to="/" className='hover:bg-gray-200 p-2 rounded-full hover:text-white'>
          <AiOutlineArrowLeft size={15} />
        </Link>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
        {children}
    </div>
  )
}

export default Layout
