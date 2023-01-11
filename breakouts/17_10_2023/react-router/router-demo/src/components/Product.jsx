import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Product = (props) => {
    const params = useParams();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/')
    //     }, 3000)
    // })


    return (
        <div>
            <h2>This is the Products component for product {params.id} </h2>
        </div>
    )
}

export default Product;