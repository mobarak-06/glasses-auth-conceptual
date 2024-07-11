import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  
  return (
    <div className="grid grid-cols-6 gap-4">
      {products.map((product) => (
        <div className="w-96 h-96 border border-red-500 rounded-md col-span-2" key={product.id}>
            <h1 className="text-3xl font-semibold">{product.productName}</h1>
            <p>{product.productDetails}</p>
            <p>{product.price}$</p>
            <Link to={`/product/${product.id}`} className="btn btn-secondary btn-outline">details</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
