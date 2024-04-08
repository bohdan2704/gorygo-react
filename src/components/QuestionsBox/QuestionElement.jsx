
// eslint-disable-next-line react/prop-types
import ResponsesBox from "../ResponsesBox/ResponsesBox.jsx";

// eslint-disable-next-line react/prop-types
export default function QuestionElement({text, authorId, responseIds}) {
    return (
        <div>
            <br/>
            --- Question ---
            <div>Text: {text}</div>
            <div>Author: {authorId}</div>
            <ResponsesBox responseIds={responseIds}/>
        </div>

    )
}
