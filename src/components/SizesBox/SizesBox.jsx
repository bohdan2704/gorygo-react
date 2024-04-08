import {apiPath} from "../../util/data.js";
import {useEffect, useState} from "react";
import SizeElement from "./SizeElement.jsx";

// eslint-disable-next-line react/prop-types
export default function SizesBox({sizesIds}) {
    const getRequestPath = apiPath + "/sizes/list/"
    const [sizes, setSizes] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        try {
            // eslint-disable-next-line react/prop-types
            fetch(getRequestPath + sizesIds.join(","))
                .then(res => res.json())
                .then(elem => setSizes(elem))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [sizesIds, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading responses...</p>}
            {error && <p>Error fetching responses: {error.message}</p>}
            {sizes.length === 0 && (<p> Strange situation, must be at least one size for each product</p>)}
            {sizes.map(elem => <SizeElement key={elem.id} content={elem.naming}/>)}
        </div>
    );
}
