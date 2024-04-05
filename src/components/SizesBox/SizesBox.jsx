import {apiPath, defaultSizesList} from "../../util/data.js";
import {useEffect, useState} from "react";
import SizeElement from "./SizeElement.jsx";

// eslint-disable-next-line react/prop-types
export default function SizesBox({sizesIds}) {
    const getRequestPath = apiPath + "/sizes/list/"
    const [sizes, setSizes] = useState(defaultSizesList)

    useEffect(() => {
        if (sizesIds[0] === 0) {
            setSizes(defaultSizesList)
        } else {
            // eslint-disable-next-line react/prop-types
            fetch(getRequestPath + sizesIds.join(","))
                .then(res => res.json())
                .then(elem => setSizes(elem))
        }
    }, [sizesIds, getRequestPath]);

    return (
        <div>
            {sizes.map(elem => <SizeElement key={elem.id} content={elem.naming}/>)}
        </div>
    );
}
