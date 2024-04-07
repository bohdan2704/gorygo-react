
// eslint-disable-next-line react/prop-types
export default function ReviewElement({text, stars, authorId, responseIds}) {
    return (
        <div>
            <br/>
            --- Review ---
            <div>Text: {text}</div>
            <div>Start: {stars}</div>
            <div>Author: {authorId}</div>
            <div>Responses: {responseIds}</div>
        </div>

    )
}
