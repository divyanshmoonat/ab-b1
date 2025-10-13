import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});
  //   console.log(params);
  const fetchProductData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await response.json();
    console.log(data);
    setProductData(data);
  };
  useEffect(() => {
    // API Call to get product details by product ID and render the data
    fetchProductData();
  }, []);
  return (
    <div>
      <h2>Product Details page</h2>
      <h3>{productData.title}</h3>
      <p>{productData.description}</p>
      <img src={productData.thumbnail} />
    </div>
  );
};

export default ProductDetails;
