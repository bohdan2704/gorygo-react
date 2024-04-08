import {apiPath} from "../../util/data.js";
import {useEffect, useState} from "react";
import CategoryElement from "./CategoryElement.jsx";

// eslint-disable-next-line react/prop-types
export default function CategoryChain({categoryId}) {
    const getRequestPath = apiPath + "/categories/chain/"
    const [categoryChain, setCategoryChain] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(getRequestPath + categoryId)
                .then(res => res.json())
                .then(elem => setCategoryChain(elem))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [categoryId, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading responses...</p>}
            {error && <p>Error fetching responses: {error.message}</p>}
            {categoryChain.length === 0 && (
                <p> Strange situation, must be at least one category and subcategory</p>)
            }
            {categoryChain.map((obj, i) =>
                <CategoryElement key={i} content={obj.name}/>)
            }
        </div>
    );
}
