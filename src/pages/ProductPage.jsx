import Header from "../components/Header/Header.jsx";
import CategoryChain from "../components/CategoryChain/CategoryChain.jsx";
import SizesBox from "../components/SizesBox/SizesBox.jsx";
import {useEffect, useState} from "react";
import {apiPath} from "../util/data.js";
import ReviewsBox from "../components/ReviewsBox/ReviewsBox.jsx";
import QuestionsBox from "../components/QuestionsBox/QuestionsBox.jsx";
import ImageSlider from "../components/ImageSlider/ImageSlider.jsx";

export default function ProductPage() {
    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.search);
        const paramValue = searchParams.get("id");
        const getRequestPath = apiPath + "/products/" + paramValue

        setIsLoading(true);
        try {
            fetch(getRequestPath)
                .then(res => res.json())
                .then(json => setProduct(json))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            {isLoading && <p>Loading products...</p>}
            {error && <p>Error fetching products: {error.message}</p>}
            {product && (<div className="main-wrapper">
                <Header/>
                <div className="naming">{product.naming}</div>
                <div className="description">{product.description}</div>
                <div className="price">{product.price}</div>
                <CategoryChain className="category-chain" categoryId={product.categoryId}></CategoryChain>
                <SizesBox className="sizes" sizesIds={product.sizeIds}></SizesBox>
                <ImageSlider className="images" imageIds={product.imageIds}></ImageSlider>
                {/*{console.log(product)}*/}
                <ReviewsBox className="reviews" reviewIds={product.reviewIds}></ReviewsBox>
                <QuestionsBox className="questions" questionIds={product.questionIds}></QuestionsBox>
            </div>)}
        </div>
  )
}
