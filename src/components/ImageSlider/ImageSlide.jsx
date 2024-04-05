import {altText, imgFolder} from "../../util/data.js";

// eslint-disable-next-line react/prop-types
export default function ImageSlide({imageName}) {
    return (
        <img src={imgFolder + imageName} alt={altText}/>
    )
}
