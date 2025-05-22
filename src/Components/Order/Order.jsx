import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useFormik } from 'formik'
import axios from 'axios'
import { cartContext } from '../../Context/cartContext'
import { useNavigate } from 'react-router-dom'


const order={
    couponcode:"",
    paymentmethod: "",
    phone:"",
    address:""
}
function Order() {
   const{clearCart}=useContext(cartContext)
      const{token}=useContext(AuthContext)
  const navigate = useNavigate()
 
    const formik = useFormik({
        initialValues:order,
        onSubmit:(values)=>{
          addOrder(values)
        }
    })


   function addOrder(values){
        axios.post('https://e-commerce-red-rho-36.vercel.app/orders',values,{headers:{token}})
        .then( async(res)=>{
             
             if (res.data.url) {
        window.open(res.data.url); 
      
      
      } else {
        alert("Order placed successfully with cash!");
         await clearCart()
         navigate('/products')
      }
        }).catch((err)=>{
            console.log(err.message);
            
        })
    }
    

    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto py-8 px-4">
  <div className="relative z-0 w-full mb-5 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.phone}
      type="tel"
      name="phone"
      id="phone"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="phone"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      phone
    </label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.address}
      type="text"
      name="address"
      id="address"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="address"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      address
    </label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.couponcode}
      type="text"
      name="couponcode"
      id="couponcode"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="couponcode"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      couponcode
    </label>
  </div>

  <div className="flex flex-col sm:flex-row gap-4">
    <button
      type="button"
      onClick={() => {
        formik.setFieldValue('paymentmethod', 'cash');
        formik.submitForm();
      }}
      className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-colors duration-300 ${
        formik.values.paymentmethod === 'cash' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
      }`}
    >
      Cash
    </button>

    <button
      type="button"
      onClick={() => {
        formik.setFieldValue('paymentmethod', 'card');
        formik.submitForm();
      }}
      className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-colors duration-300 ${
        formik.values.paymentmethod === 'card' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
      }`}
    >
      Card
    </button>
  </div>
</form>

}
 export default Order


  
