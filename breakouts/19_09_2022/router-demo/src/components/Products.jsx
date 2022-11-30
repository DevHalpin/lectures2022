import { useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about')
    }, 6000)
  }, [])
    return (
      <div>
        <h2>This is the Products component</h2>

        <div>
            <Link to="1">Product #1 </Link>
            <Link to="2">Product #2 </Link>
            <Link to="3">Product #3 </Link>
            <Link to="4">Product #4 </Link>
        </div>

        <Routes>
            <Route path=":id" element={<ProductItem />} />
            <Route path="" element={<h2>Please choose an item from the list above</h2>} />
            <Route path="/secret" element={<h2>You found the secret page.</h2>} />
        </Routes>
      </div>
    );
  };
  
  export default Products;