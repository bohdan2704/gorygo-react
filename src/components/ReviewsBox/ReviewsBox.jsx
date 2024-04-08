import {useEffect, useState} from "react";
import ReviewElement from "./ReviewElement.jsx";
import {apiPath} from "../../util/data.js";

// eslint-disable-next-line react/prop-types
const ReviewsBox = ({ reviewIds }) => {
    const getRequestPath = apiPath + "/reviews/list/"
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (reviewIds.length > 0) {
            setIsLoading(true)
            try {
                // eslint-disable-next-line react/prop-types
                fetch(getRequestPath + reviewIds.join(","))
                    .then(response => response.json())
                    .then(jsonObj => setReviews(jsonObj));
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [reviewIds, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading reviews...</p>}
            {error && <p>Error fetching reviews: {error.message}</p>}
            {reviews.length === 0 && (<p> No comments were left for this product</p>)}
            {reviews.map((elem) => (
                <ReviewElement key={elem.id} {...elem} />
            ))}
        </div>
    );
};

export default ReviewsBox;
