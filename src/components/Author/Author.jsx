import {useEffect, useState} from "react";
import {apiPath} from "../../util/data.js";

// eslint-disable-next-line react/prop-types
const Author = ({ authorId }) => {
    const getRequestPath = apiPath + "/users/"
    const [author, setAuthor] = useState("Loading");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            // eslint-disable-next-line react/prop-types
            fetch(getRequestPath + authorId)
                .then(response => response.json())
                .then(jsonObj => setAuthor(jsonObj.name));
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [authorId, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading author...</p>}
            {error && <p>Error fetching author: {error.message}</p>}
            {author}
        </div>
    );
};

export default Author;
