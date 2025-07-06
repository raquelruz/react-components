import "./UserCard.css";

export const UserCard = ({ name, age, city }) => {
	return (
		<div className="user-card">
			<h2>{name}</h2>
			<p>Edad: {age}</p>
			<p>Ciudad: {city}</p>
		</div>
	);
};
