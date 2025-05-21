import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useRef } from 'react'
import { ClipLoader } from 'react-spinners'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Categories() {
        let sliderRef =useRef(null);
    
     const settings = {
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };
     function getcategory(){
        return axios.get('https://e-commerce-five-beta-63.vercel.app/categories')
     }
     const{data,isError,isLoading}=useQuery({
        queryKey:['categories'],
        queryFn:getcategory
     })
     const categories = data?.data?.categories
     if(isError){
        return  <div className="text-red-500 text-center">Something went wrong...</div>;
     }
     if(isLoading){
        return (
            <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#000" size={50} />
        </div>
        )
     }
    return (
        

<div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
 <Slider ref={sliderRef} {...settings}>

 {categories.map((category)=>(
  <div key={category._id} >
   
    <img className="rounded-t-lg h-[300px] object-cover" src= {category.image.secure_url} alt="" />
 
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
     
  </div>
  ))}
  </Slider>

</div>


    )
}

export default Categories
