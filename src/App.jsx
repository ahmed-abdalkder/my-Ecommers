 
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Order from './Components/Order/Order'
import Cart from './Components/Cart/Cart'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Categories from './Components/Categories/Categories'
import NotFound from './Components/NotFound/NotFound'
import ProtactRouter from './Components/ProtactRouter/ProtactRouter'
import AuthContextProvider from './Context/AuthContext'
import Products from './Components/Products/Products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartContextProvider from './Context/cartContext'
import SuccessOrder from './Components/SuccessOrder/SuccessOrder'
import CancelOrder from './Components/CancelOrder/CancelOrder'
 

const router = createHashRouter([
    {path:'',element:<Layout/>,children:[
    {path:"",element:<Register/>},
    {path:"login",element:<Login/>},
    {path:"*",element:<NotFound/>},
    {path:"productDetails/:id",element:<ProtactRouter><ProductDetails/></ProtactRouter>},
    {path:"order",element:<ProtactRouter><Order/></ProtactRouter>},
    {path:"products",element:<ProtactRouter><Products/></ProtactRouter>},
    {path:"cart",element:<ProtactRouter><Cart/></ProtactRouter>},
    {path:"category",element:<ProtactRouter><Categories/></ProtactRouter>},
    { path:"orders/success/:id", element:<SuccessOrder/>} ,
    {path:"orders/cancel/:id", element:<CancelOrder/> }  
  ]}
])
const client = new QueryClient()
function App() {
  

  return (
    <>
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <CartContextProvider>
      <RouterProvider router={router}/>
      </CartContextProvider>
       </AuthContextProvider>
      </QueryClientProvider>
      
    </>
  )
}

export default App
