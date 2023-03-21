import { useNavigate, Navigate } from "react-router-dom"


const ProtectedRoute = ({user, children}) => {
    const navigate = useNavigate();
    // if (!user) {
    //     return <Navigate to='/' replace={true} /> 
    // }
    if (!user) {
        <h2>You are not logged in, returning to homepage...</h2>
        setTimeout(() => {
            navigate('/')
        }, 3000)
        return
    }

    return children
}

export default ProtectedRoute