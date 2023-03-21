import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams();

    return (
        <div>
            <h2>This is the Products component for product {params.id}</h2>
        </div>
    )
}

export default Product;