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
  speed: 500,
  slidesToShow: 6,  
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,  
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

     function getcategory(){
        return axios.get('https://e-commerce-red-rho-36.vercel.app/categories')
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
  <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 sm:p-4">
    <Slider ref={sliderRef} {...settings}>
      {categories.map((category) => (
        <div key={category._id} className="px-1">
          <img
            className="rounded-lg w-full h-[180px] sm:h-[250px] md:h-[300px] object-cover"
            src={category.image.secure_url}
            alt={category.name}
          />
          <h5 className="mt-2 text-base sm:text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {category.name}
          </h5>
        </div>
      ))}
    </Slider>
  </div>
);

}

export default Categories
