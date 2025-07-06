import "./FavFruit.css";

export const FavFruit = ({ fruit }) => {
	return (
		<div className="favfruit-container">
			<h4>Mi fruta favorita es: {fruit}</h4>
		</div>
	);
};
