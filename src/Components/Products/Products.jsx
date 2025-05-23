import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import cartIcon from '../../assets/images/cart-grey.svg'
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import SliderGoTo from '../SliderGoTo/SliderGoTo';
import Categories from '../Categories/Categories';
import { cartContext } from '../../Context/cartContext';

function Products() {
  const{addToCart}=useContext(cartContext)
    function getAllproductes(){
      return  axios.get('https://e-commerce-red-rho-36.vercel.app/products/getAllProducts')
             
    }
    function callAddCart(id){
      addToCart(id)
    }
const{data,isLoading,isError} = useQuery({
    
 queryKey:['products'],
 queryFn: 
    getAllproductes 
  
})
const products= data?.data?.products || []
 

 if(isLoading){ return (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#000" size={50} />
        </div>
      ); }
      if (isError) {
        return <div className="text-red-500 text-center">Something went wrong...</div>;
      }
    return (
       <>
       <SliderGoTo/>
       <Categories/>
       <div className='container mx-auto p-4'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'> 
    {products?.map((product) => (
      <div key={product._id} className="w-full bg-gray border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:scale-105">
        <Link to={`/productDetails/${product._id}`}>
          <div className="p-4 bg-gray-100 rounded-md">
            <img className='w-full h-[180px] object-cover rounded-md' src={product.coverimages[0]?.secure_url} alt="product image" />

            <div className='flex items-center justify-between mt-2'>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">5.0</span>
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  callAddCart(product._id);
                }}
              >
                <img
                  className='w-8 h-8 transition duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:bg-green-300 p-1 rounded-full'
                  src={cartIcon}
                  alt="cart"
                />
              </button>
            </div>
          </div>

          <div className="px-4 pb-4">
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white">{product.category.name}</h5>
            <h5 className="text-base font-semibold text-gray-900 dark:text-white">{product.title}</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">{product.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-900 dark:text-white">EGP <span className='text-lg font-bold'>{product.price}</span></span>
              <span className="font-semibold text-green-500 dark:text-green-400">{product.discount}</span>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>

</>
    )
}

export default Products
