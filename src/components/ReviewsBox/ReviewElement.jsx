
// eslint-disable-next-line react/prop-types
import ResponsesBox from "../ResponsesBox/ResponsesBox.jsx";
import Author from "../Author/Author.jsx";

// eslint-disable-next-line react/prop-types
export default function ReviewElement({text, stars, authorId, responseIds}) {
    return (
        <div>
            <br/>
            --- Review ---
            <Author authorId={authorId}/>
            <div>Text: {text}</div>
            <div>Start: {stars}</div>
            <ResponsesBox responseIds={responseIds}/>
        </div>
    )
}
