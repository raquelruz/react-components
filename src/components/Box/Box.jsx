import "./Box.css";

export const Box = (props) => {
	return (
    <div className="box-container">
        {props.children}
    </div>
)

};
