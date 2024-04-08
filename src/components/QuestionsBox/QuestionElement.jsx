
// eslint-disable-next-line react/prop-types
import ResponsesBox from "../ResponsesBox/ResponsesBox.jsx";
import Author from "../Author/Author.jsx";

// eslint-disable-next-line react/prop-types
export default function QuestionElement({text, authorId, responseIds}) {
    return (
        <div>
            <br/>
            --- Question ---
            <Author authorId={authorId}/>
            <div>Text: {text}</div>
            <ResponsesBox responseIds={responseIds}/>
        </div>

    )
}
