import { useLoaderData, useParams } from "react-router-dom";

const ProductsDetails = () => {
    const products = useLoaderData()
    const {id} = useParams();
    const productInt = parseInt(id)
    const product = products.find(item => item.id === productInt);
    const {productName, productDetails} = product;
    console.log(product, productInt, id);
    
    return (
        <div>
            <h2 className="text-3xl font-bold">{productName}</h2>
           <p>{productDetails}</p>
        </div>
    );
};

export default ProductsDetails;