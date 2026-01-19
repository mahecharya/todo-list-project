import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-950 flex justify-around' >
        <div className='flex justify-center text-4xl p-4 font-semibold'>
            <h1 className='text-blue-200'>My To-do list</h1>
        </div>
        <div className='p-8 gap-x-1.5'>
             <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-600 px-3 py-1 rounded"
            : "text-white hover:bg-gray-300 px-3 py-1 rounded"
        }
      >
        Home
     </NavLink>
     <NavLink
        to="/all"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-600 px-3 py-1 rounded"
            : "text-white hover:bg-gray-300 px-3 py-1 rounded"
        }
      >
        All
     </NavLink>

       <NavLink
        to="/complete"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-600 px-3 py-1 rounded"
            : "text-white hover:bg-gray-300 px-3 py-1 rounded"
        }
      >
        Completed
      </NavLink>
       <NavLink
        to="/pending"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-600 px-3 py-1 rounded"
            : "text-white hover:bg-gray-300 px-3 py-1 rounded"
        }
      >
        Pending 
      </NavLink>

        </div>
      
    </div>
  )
}

export default Header
