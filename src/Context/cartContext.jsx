import React, { createContext, useEffect, useState } from 'react'
 
import axios from 'axios'
 

export const cartContext = createContext()


function CartContextProvider({children}) {
    const[products,setProducts]=useState( [])
    const[cartId,setCartId]=useState(null)
    const numOfCartItems=products?.length
    const token = localStorage.getItem('toky') 
        
       

   async function addToCart(productId ,quantity = 1){
      const res= await axios.post('https://e-commerce-inky-pi.vercel.app/carts',{productId,quantity},{
            headers:{token}})
         .then((res)=>{
     console.log(res.data.carts);
     getcart()

         }).catch((err)=>{
            console.log(err.message);
            
         })
            
             
    }

    function getcart(){
        axios.get('https://e-commerce-inky-pi.vercel.app/carts/getCart',{
            headers:{token}
        }).then((res)=>{
            
            setCartId(res.data.cart._id)
            setProducts(res.data.cart.products)
        
        }).catch((err)=>{
            console.log(err.message);
            
        })

    }
 useEffect(()=>{
       if(token){ getcart()}
       
    },[token])

    function updateCart(productId,count){
        axios.put('https://e-commerce-inky-pi.vercel.app/carts',{productId,'count':count},{headers:{token}})
         .then((res)=>{
                    
            getcart()
         }).catch((err)=>{
            console.log(err.message);
            
         })
    }
    function deleteCart(id){
        axios.delete(`https://e-commerce-inky-pi.vercel.app/carts/${id}`,{headers:{token}})
         .then((res)=>{
             getcart()
         }).catch((err)=>{
            console.log(err.message);
            
         })
    }
    async function clearCart(){
     const res= await axios.put('https://e-commerce-inky-pi.vercel.app/carts/clear',{},{headers:{token}})
        setProducts([])
    }
    return (
        <cartContext.Provider value={{
            addToCart,
            cartId,
            products,
            numOfCartItems,
            getcart,
            updateCart,
            deleteCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider
