import "./App.css";
import { Avatar } from "./components/Avatar/Avatar";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { UserCard } from "./components/UserCard/UserCard";

export const App = () => {
	return (
		<>
			<h1>Primera app en React</h1>

			<Avatar url={"./media/images/khaleesi.png"} name={"Khaleesi"} />
			
            <UserCard name={"Raquel"} age={29} city={"Jerez"} />

			<CustomButton text={"Aceptar"} />

		</>
	);
};
