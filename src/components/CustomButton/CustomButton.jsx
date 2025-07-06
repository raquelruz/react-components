import "./CustomButton.css";

export const CustomButton = ({ text }) => {
    return (
        <div className="custombtn-container">
            <button className="custombutton">{text}</button>
        </div>
    )
}