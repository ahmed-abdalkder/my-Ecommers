import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';

function SuccessOrder() {
  const{clearCart}=useContext(cartContext)
  const { id } = useParams();
    useEffect(()=>{
   clearCart()

    },[])
 return (
  <div className="px-4 py-16 md:py-20 text-center">
    <h1 className="text-2xl md:text-3xl font-bold text-green-600">Payment Successful!</h1>
    <p className="mt-4 text-base md:text-lg">
      Your order ID is <strong>{id}</strong>
    </p>
    <Link
      to="/products"
      className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm md:text-base"
    >
      Back to Product
    </Link>
  </div>
);

}

export default SuccessOrder;
