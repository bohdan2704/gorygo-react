import {apiPath, defaultImagesList} from "../../util/data.js";
import {useEffect, useState} from "react";
import ImageSlide from "./ImageSlide.jsx";

// eslint-disable-next-line react/prop-types
export default function ImageSlider({imageIds}) {
    const getRequestPath = apiPath + "/images/list/"
    const [images, setImages] = useState(defaultImagesList)

    useEffect(() => {
        if (imageIds[0] === 0) {
            setImages(defaultImagesList)
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
