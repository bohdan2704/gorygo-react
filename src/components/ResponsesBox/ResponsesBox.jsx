import {useEffect, useState} from "react";
import {apiPath} from "../../util/data.js";
import ResponseElement from "./ResponseElement.jsx";

// eslint-disable-next-line react/prop-types
const ResponsesBox = ({ responseIds }) => {
    const getRequestPath = apiPath + "/responses/list/"
    const [responses, setResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // console.log(responseIds)

    useEffect(() => {
        if (responseIds.length > 0) {
            setIsLoading(true)
            try {
                // eslint-disable-next-line react/prop-types
                fetch(getRequestPath + responseIds.join(","))
                    .then(response => response.json())
                    .then(jsonObj => setResponses(jsonObj));
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [responseIds, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading responses...</p>}
            {error && <p>Error fetching reviews: {error.message}</p>}
            {responses.length === 0 && (<p> No responses were left for this review</p>)}
            {responses.map((elem) => (
                <ResponseElement key={elem.id} text={elem.text} authorId={elem.authorId} />
            ))}
        </div>
    );
};

export default ResponsesBox;
