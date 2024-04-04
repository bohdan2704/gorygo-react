import "./ProductPreview.css"
import {altText, apiPath, imgFolder} from "../../util/data.js"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductPreview({id, naming, price, imageIds}) {
    // const [box, setBox] = useState("No data loaded");
    const getRequestPath = apiPath + "/images/"
    const navigate = useNavigate()
    const [imageName, setImageName] = useState("placeholder.png")

    useEffect(() => {
        if (imageIds[0] === 0) {
            setImageName("placeholder.png")
        } else {
            fetch(getRequestPath+imageIds[0])
                .then(res => res.json())
                .then(imageAsJson => setImageName(imageAsJson.naming))
        }
    }, [getRequestPath, imageIds]);

    return (
    <div className="wrapper">
    <img onClick={() => navigate('/product?id=' + id)}
        src={imgFolder+imageName} alt={altText}/>
            <p>{naming}</p>
            <p>{price}</p>
            <button>Buy me!</button>
        </div>
    )

}