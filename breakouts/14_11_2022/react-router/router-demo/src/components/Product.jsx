import { useParams } from "react-router-dom"


const Product = (props) => {
    const params = useParams();

    return (
        <div>
            <h2>This is the Product component for product {params.id}</h2>
        </div>
    )
}

export default Product