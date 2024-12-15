import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

 
 const PrivateRoute = () => {
    const { currentAdmin } = useSelector((state) => state.admin)
 
    return currentAdmin? <Outlet/> : <Navigate to='/admin-login' />
 }
 
 export default PrivateRoute