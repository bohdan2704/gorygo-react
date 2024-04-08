
// eslint-disable-next-line react/prop-types
import Author from "../Author/Author.jsx";

// eslint-disable-next-line react/prop-types
export default function ResponseElement({text, authorId}) {
    return (
        <div>
            <br/>
            --- Response ---
            <Author authorId={authorId}/>
            <div>Text: {text}</div>
            {/*<div>Author: {authorId}</div>*/}
        </div>
    )
}
