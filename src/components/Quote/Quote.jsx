import "./Quote.css";

export const Quote = ({ quote, author }) => {
    return (
        <div className="quote-container">
            <h3>{quote}</h3>
            <h4>{author}</h4>
        </div>
    )
}