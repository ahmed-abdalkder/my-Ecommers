import { Link, useParams } from 'react-router-dom';

function CancelOrder() {
  const { id } = useParams();

return (
  <div className="px-4 py-10 text-center sm:px-6 md:px-10">
    <h1 className="text-2xl sm:text-3xl font-bold text-red-600">Payment Cancelled</h1>
    <p className="mt-4 text-sm sm:text-base">
      Order ID: <strong>{id}</strong>
    </p>
    <Link
      to="/cart"
      className="mt-6 inline-block bg-gray-500 hover:bg-gray-600 text-white text-sm sm:text-base px-4 py-2 rounded transition"
    >
      Try Again
    </Link>
  </div>
);
}

export default CancelOrder;
