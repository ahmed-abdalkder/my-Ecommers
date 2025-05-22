import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

function Login() {
  const{setToken}=useContext(AuthContext)
  const[isError,setIsError]=useState(null)
  const[issuccess,setIssuccess]=useState(false)
const navigate = useNavigate()
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:(values)=>{
          login(values)
        }
    })

    function login(values){
        axios.post('https://e-commerce-red-rho-36.vercel.app/users/signin',values)
        .then((res)=>{
            console.log(res.data.token);
            const newToken =res.data.token
            const finalToken = `ahmed__${newToken}`
            localStorage.setItem('toky',finalToken)
            setToken(res.data.token)
           
             setTimeout(()=>{
              setIssuccess(true)
              },2000)
            navigate("/products")
        }).catch((err)=>{
            console.log(err.message);
              setIsError(err.response?.data?.message || "Login failed");
           setTimeout(()=>{
             setIsError(null)
        },2000)
        })
    }
    return (
       
<>
{(isError || issuccess) && (
  <div className="fixed top-5 left-4 right-4 z-50 max-w-sm mx-auto">
    {isError && (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {isError}
      </div>
    )}
    {issuccess && (
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        Congratulation
      </div>
    )}
  </div>
)}

<form onSubmit={formik.handleSubmit} className="w-full max-w-sm mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <h1 className="pb-4 text-xl text-green-500 text-center">Login Now :</h1>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input
      onChange={formik.handleChange}
      value={formik.values.email}
      type="email"
      id="email"
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Email"
      required
    />
  </div>

  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input
      onChange={formik.handleChange}
      value={formik.values.password}
      type="password"
      id="password"
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Password"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    Login
  </button>
</form>

</>
    )
}

export default Login
