import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { FaShoppingCart } from 'react-icons/fa'
import { cartContext } from '../../Context/cartContext'

function Navbar() {
  const{numOfCartItems}=useContext(cartContext)
  const navigate = useNavigate()
  const{token,setToken}=useContext(AuthContext)
function logout(){
  localStorage.removeItem('toky')
  setToken(null)
  navigate('/login')
}
    return (
        <nav className=" bg-green-400 border-gray-200 dark:bg-gray-900 w-full ">
  <div className ="w-full  flex flex-wrap items-center justify-between p-4">
  <div className="flex justify-between w-full items-center">

    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
       
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommers</span>
    </Link>
    {token?
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
         
        <li>
          <NavLink to="products" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productes</NavLink>
        </li>
        <li>
          <NavLink to="category" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Category</NavLink>
        </li>
         
      </ul> :''}
    <div className='flex items-center  justify-between px-3'>
     
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {token? <li className='pb-2 relative'>
            <span className='absolute top-0 right-0 text-white -translate-y-full'>{numOfCartItems}</span>
          <Link to="/cart" className=""><FaShoppingCart /></Link>
        </li>:''}
        {!token? <li>
          <NavLink to="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
        </li>:''}
        {!token? <li>
          <NavLink to="login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
        </li> :''}  
        {token? <li onClick={logout}>
          <NavLink to="logout" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</NavLink>
        </li> :''}  
      </ul>
    </div>
  </div>
   </div>
</nav>

    )
}

export default Navbar
