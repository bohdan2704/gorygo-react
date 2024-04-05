import {apiPath, defaultCategoryChain} from "../../util/data.js";
import {useEffect, useState} from "react";
import CategoryElement from "./CategoryElement.jsx";

// eslint-disable-next-line react/prop-types
export default function CategoryChain({categoryId}) {
    const getRequestPath = apiPath + "/categories/chain/"
    const [categoryChain, setCategoryChain] = useState(defaultCategoryChain)

    useEffect(() => {
        if (categoryId === 0) {
            console.log(defaultCategoryChain)
            setCategoryChain(defaultCategoryChain)
        } else {
            fetch(getRequestPath + categoryId)
                .then(res => res.json())
                .then(elem => setCategoryChain(elem))
        }
    }, [categoryId, getRequestPath]);

    return (
        <div>
            {categoryChain.map((obj, i) =>
            <CategoryElement key={i} content={obj.name}/>)}
        </div>
    );
}
