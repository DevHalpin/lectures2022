import { useParams } from "react-router-dom"

const Product = () => {
    const params = useParams();

    console.log(params)
    return (
        <h2>This is the Product Component for Product #{params.id}</h2>
    )
}

export default Product