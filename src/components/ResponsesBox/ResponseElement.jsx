
// eslint-disable-next-line react/prop-types
export default function ResponseElement({text, authorId}) {
    return (
        <div>
            <br/>
            --- Response ---
            <div>Text: {text}</div>
            <div>Author: {authorId}</div>
        </div>
    )
}
