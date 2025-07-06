import "./ClicksCounter.css";

export const ClicksCounter = ({ number }) => {
	return (
		<div className="counter-container">
			<p className="number-counter">{number}</p>
			<button className="counter-btn">Incrementar</button>
		</div>
	);
};
