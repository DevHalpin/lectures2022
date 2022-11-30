import { useParams } from "react-router-dom";

const ProductItem = () => {

    const {id} = useParams();
    console.log(id)
    return (
      <div>
        <h2>This is the ProductItem component for {id} </h2>
      </div>
    );
  };
  
  export default ProductItem;