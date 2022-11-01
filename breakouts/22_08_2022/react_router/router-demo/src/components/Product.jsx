import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Product = () => {
    const params = useParams();
    console.log(params);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/about');
    //     }, 6000)
    // }, [])

    return (
      <div>
        <h2>This is the Product component for component {params.id} </h2>
      </div>
    );
  };
  
  export default Product;
  