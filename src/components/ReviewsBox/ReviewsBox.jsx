import {apiPath, defaultImagesList} from "../../util/data.js";
import {useEffect, useState} from "react";
import ImageSlide from "../ImageSlider/ImageSlide.jsx";

export default function ReviewsBox({reviewIds}) {
    const getRequestPath = apiPath + "/reviews/list/"
    const [reviews, setReviews] = useState(defaultReviewsList)

    useEffect(() => {
        if (reviewIds[0] === 0) {
            setReviews(defaultImagesList)
        } else {
            // eslint-disable-next-line react/prop-types
            fetch(getRequestPath + imageIds.join(","))
                .then(res => res.json())
                .then(elem => setImages(elem))
        }
    }, [imageIds, getRequestPath]);

    return (
        <div>
            {images.map(elem => <ImageSlide key={elem.id} imageName={elem.naming}/>)}
        </div>
    );
}
