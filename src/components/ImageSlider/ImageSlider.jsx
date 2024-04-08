import {apiPath} from "../../util/data.js";
import {useEffect, useState} from "react";
import ImageSlide from "./ImageSlide.jsx";

// eslint-disable-next-line react/prop-types
export default function ImageSlider({imageIds}) {
    const getRequestPath = apiPath + "/images/list/"
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            // eslint-disable-next-line react/prop-types
            fetch(getRequestPath + imageIds.join(","))
                .then(res => res.json())
                .then(elem => setImages(elem))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [imageIds, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading responses...</p>}
            {error && <p>Error fetching responses: {error.message}</p>}
            {images.length === 0 && (<p> No responses were left for this review</p>)}
            {images.map(elem => <ImageSlide key={elem.id} imageName={elem.naming}/>)}
        </div>
    );
}
