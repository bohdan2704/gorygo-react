import {useEffect, useState} from "react";
import {apiPath} from "../../util/data.js";
import QuestionElement from "./QuestionElement.jsx";

// eslint-disable-next-line react/prop-types
const QuestionBox = ({ questionIds }) => {
    const getRequestPath = apiPath + "/questions/list/"
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (questionIds.length > 0) {
            setIsLoading(true)
            try {
                // eslint-disable-next-line react/prop-types
                fetch(getRequestPath + questionIds.join(","))
                    .then(response => response.json())
                    .then(jsonObj => setQuestions(jsonObj));
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [questionIds, getRequestPath]);

    return (
        <div>
            {isLoading && <p>Loading questions...</p>}
            {error && <p>Error fetching question: {error.message}</p>}
            {questions.length === 0 && (<p> No questions were left for this product</p>)}
            {questions.map((elem) => (
                <QuestionElement key={elem.id} {...elem} />
            ))}
        </div>
    );
};

export default QuestionBox;
