import { Link, Routes, Route} from 'react-router-dom';
import Product from "./Product"

const ProductList = () => {
  return (
    <div>
      <h2>This is the ProductList Component</h2>
      <div>
        <Link to="1">Product #1</Link>
        <Link to="2">Product #2</Link>
        <Link to="3">Product #3</Link>
        <Link to="4">Product #4</Link>
      </div>

      <Routes>
        <Route path=":id" element={<Product/>} />
        <Route path="*" element={<h1>Please select a product from above</h1>} />
      </Routes>
    </div>
  )
}

export default ProductList;