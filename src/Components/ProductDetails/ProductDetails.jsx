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
  <div className="py-8 px-4">
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row md:w-3/4 md:m-auto">
      <img
        className="object-cover w-full h-64 rounded-t-lg md:h-auto md:w-1/2 md:rounded-l-lg p-4"
        src={peoductDetails.coverimages[0]?.secure_url}
        alt={peoductDetails.title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
          {peoductDetails.title}
        </h5>
        <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.category.name}</p>
        <p className="mb-3 text-gray-700 dark:text-gray-400">{peoductDetails.description}</p>
        <span className="font-semibold text-gray-700 dark:text-gray-400">{peoductDetails.price}</span>
        <span className="font-semibold text-gray-700 dark:text-gray-400 ml-4">{peoductDetails.discount}</span>
      </div>
    </div>
  </div>
);

}

export default ProductDetails
