import { useEffect, useState } from "react";
import { ProductType } from "../../common/types";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState(new Array<ProductType>());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </>
  );
}
