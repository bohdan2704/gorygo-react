import "./ProductContainer.css"
import ProductPreview from "../ProductPreview/ProductPreview.jsx";
import {useEffect, useState} from "react";
import {defaultProductPreviewsList} from "../../util/data.js";

export default function ProductContainer() {
    const getRequestPath = "http://localhost:8080/api/products"
    const [products, setProducts] = useState(defaultProductPreviewsList)

    useEffect(() => {
        fetch(getRequestPath)
            .then(res => res.json())
            .then(jsonArray => setProducts(jsonArray))
    }, []);


    // FIX THIS, ADD KEY EVERYWHERE AND CONTINUE TO WORK WITH SORT WINDOW
    return (
        <div className="product-container">
            {products.map(elem => <ProductPreview key={elem.id} {...elem}/>)}
        </div>
    )

}

// {products.map(elem => <ProductPreview key={elem.id}
//                                       naming={elem.naming}
//                                       price={elem.price}
//                                       imageIds={elem.imageIds}/>)}