import { Link, useParams } from 'react-router-dom';

function CancelOrder() {
  const { id } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled</h1>
      <p className="mt-4">Order ID: <strong>{id}</strong></p>
      <Link to="/cart" className="mt-6 inline-block bg-gray-400 text-white px-4 py-2 rounded">Try Again</Link>
    </div>
  );
}

export default CancelOrder;
