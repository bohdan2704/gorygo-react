import "./ProductPreview.css"
import {altText, apiPath, imgFolder} from "../../util/data.js"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductPreview({id, naming, price, imageIds}) {
    // const [box, setBox] = useState("No data loaded");
    const getRequestPath = apiPath + "/images/"
    const navigate = useNavigate()
    const [imageName, setImageName] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(getRequestPath+imageIds[0])
                .then(res => res.json())
                .then(imageAsJson => setImageName(imageAsJson.naming))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }

    }, [getRequestPath, imageIds]);

    return (
    <div className="wrapper">
        {isLoading && <p>Loading products...</p>}
        {error && <p>Error fetching products: {error.message}</p>}
        <img onClick={() => navigate('/product?id=' + id)} src={imgFolder+imageName} alt={altText}/>
        <p>{naming}</p>
        <p>{price}</p>
        <button>Buy me!</button>
    </div>
    )

}