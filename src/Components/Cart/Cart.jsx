import axios from 'axios'
import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'


function Cart() {
const{numOfCartItems,products,updateCart,deleteCart} = useContext(cartContext)
 if(!products){
   return <ClipLoader color="#000" size={50} />
 }
function handelupdate(productId,count){
      updateCart(productId,count)
}
function handelldelete(id){
      deleteCart(id)
}
    return (
  <div className="relative overflow-x-auto shadow-md rounded-md">
    <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-[10px] sm:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-2 sm:px-6">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="px-2 py-2 sm:px-4">Product</th>
          <th scope="col" className="px-2 py-2 sm:px-4">Qty</th>
          <th scope="col" className="px-2 py-2 sm:px-4">Price</th>
          <th scope="col" className="px-2 py-2 sm:px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr
            key={product._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="p-2 sm:p-4">
              <img
                src={product?.productId?.coverimages[0].secure_url}
                className="w-12 sm:w-16 md:w-24 max-w-full max-h-full"
                alt={product.productId?.title}
              />
            </td>
            <td className="px-2 py-2 sm:px-4 font-semibold text-gray-900 dark:text-white">
              {product.productId?.title}
            </td>
            <td className="px-2 py-2 sm:px-4">
              <div className="flex items-center gap-1 sm:gap-3">
                <button
                  onClick={() => handelupdate(product.productId._id, -1)}
                  className="h-6 w-6 p-1 text-xs text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <svg className="w-3 h-3" viewBox="0 0 18 2" fill="none">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  readOnly
                  value={product.quantity}
                  className="w-10 sm:w-14 text-center text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  onClick={() => handelupdate(product.productId._id, +1)}
                  className="h-6 w-6 p-1 text-xs text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <svg className="w-3 h-3" viewBox="0 0 18 18" fill="none">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-2 py-2 sm:px-4 font-semibold text-gray-900 dark:text-white">
              {product.productId?.price}
            </td>
            <td className="px-2 py-2 sm:px-4">
              <button
                onClick={() => handelldelete(product.productId._id)}
                className="text-red-600 dark:text-red-500 hover:underline text-xs sm:text-sm"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <Link to="/order">
      <button
        type="button"
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 text-lg sm:text-2xl font-semibold transition"
      >
        Add To Buy
      </button>
    </Link>
  </div>
);

}

export default Cart
