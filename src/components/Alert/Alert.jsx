import "./Alert.css";

export const Alert = ({ type, message }) => {
	return (
    <h1 className={`alert alert-${type}`}>{message}</h1>
    )
};
