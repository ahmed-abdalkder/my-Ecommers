import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function ProductDetails() {
   const{ id } = useParams()
    function getProduct(){
        return axios.get(`https://e-commerce-red-rho-36.vercel.app/products/Product/${id}`)
    }
    const{data,isError,isLoading}=useQuery({
        queryKey:['product',id],
        queryFn:getProduct
    })
    const peoductDetails = data?.data?.product
    if(isError){
        return <div className="text-red-500 text-center">Something went wrong...</div>;
    }
    if(isLoading){
        return(
             <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#000" size={50} />
        </div>
        )
    }
    return (
     <div className='py-24'>
<div className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:w-3/4 m-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-lg md:rounded-s-lg p-5" src={peoductDetails.coverimages[0]?.secure_url} alt="" />
  <div className="flex flex-col justify-between  leading-normal p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{peoductDetails.title} </h5>
    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.category.name}</p>
    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.description}</p>
    <span className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.price}</span>
    <span className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.discount}</span>
  </div>
</div>
</div>  

    )
}

export default ProductDetails
