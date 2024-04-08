import "./ProductContainer.css"
import ProductPreview from "../ProductPreview/ProductPreview.jsx";
import {useEffect, useState} from "react";

export default function ProductContainer() {
    const getRequestPath = "http://localhost:8080/api/products"
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(getRequestPath)
                .then(res => res.json())
                .then(jsonArray => setProducts(jsonArray))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);


    return (
        <div className="product-container">
            {isLoading && <p>Loading products...</p>}
            {error && <p>Error fetching products: {error.message}</p>}
            {products.length === 0 && (<p> No products found in this category</p>)}
            {products.map(elem => <ProductPreview key={elem.id} {...elem}/>)}
        </div>
    )

}

// {products.map(elem => <ProductPreview key={elem.id}
//                                       naming={elem.naming}
//                                       price={elem.price}
//                                       imageIds={elem.imageIds}/>)}