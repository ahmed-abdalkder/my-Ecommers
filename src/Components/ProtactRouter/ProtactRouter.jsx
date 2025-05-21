import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtactRouter({children}) {
const {token} = useContext(AuthContext)
if(!token){
   return <Navigate to='/login'  replace/>
}
    return children 

}

export default ProtactRouter
