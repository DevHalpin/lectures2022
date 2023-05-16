import { useParams} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <h2>This is the Product component for Product {params.id}</h2>
    </div>
  )
}

export default Product;