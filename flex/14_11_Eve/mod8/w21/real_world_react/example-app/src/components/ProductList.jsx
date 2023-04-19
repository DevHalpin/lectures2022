import { Link, Routes, Route } from "react-router-dom";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <Link to={"1"}>Product 1</Link>
      <Link to={"2"}>Product 2</Link>
      <Link to={"3"}>Product 3</Link>
      <Link to={"4"}>Product 4</Link>

      <Routes>
        <Route path=":id" element={<Product/>} />
      </Routes>
    </>
  );
};

export default ProductList
