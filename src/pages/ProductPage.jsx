import Header from "../components/Header/Header.jsx";
import CategoryChain from "../components/CategoryChain/CategoryChain.jsx";
import SizesBox from "../components/SizesBox/SizesBox.jsx";
import {useEffect, useState} from "react";
import {apiPath, defaultProductJson} from "../util/data.js";
import ImageSlider from "../components/ImageSlider/ImageSlider.jsx";
import ReviewsBox from "../components/ReviewsBox/ReviewsBox.jsx";
import QuestionsBox from "../components/QuestionsBox/QuestionsBox.jsx";

export default function ProductPage() {
    const [productJson, setProductJson] = useState(defaultProductJson)

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.search);
        const paramValue = searchParams.get("id");
        const getRequestPath = apiPath + "/products/" + paramValue
        fetch(getRequestPath)
            .then(res => res.json())
            .then(json => setProductJson(json))
    }, []);

    return (
          <div className="main-wrapper">
              <Header/>
              <div className="naming">{productJson.naming}</div>
              <div className="description">{productJson.description}</div>
              <div className="price">{productJson.price}</div>
              <CategoryChain className="category-chain" categoryId={productJson.categoryId}></CategoryChain>
              <SizesBox className="sizes" sizesIds={productJson.sizeIds}></SizesBox>
              {/*<ImageSlider className="images" imageIds={productJson.imageIds}></ImageSlider>*/}
              {/*{console.log(productJson)}*/}
              <ReviewsBox className="reviews" reviewIds={productJson.reviewIds}></ReviewsBox>
              {/*<QuestionsBox className="questions" questionIds={productJson.questionIds}></QuestionsBox>*/}
          </div>
  )
}
