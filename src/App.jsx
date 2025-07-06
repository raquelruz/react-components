import "./App.css";
import { Avatar } from "./components/Avatar/Avatar";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { UserCard } from "./components/UserCard/UserCard";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { Product } from "./components/Product/Product"
import { Alert } from "./components/Alert/Alert"

export const App = () => {
	return (
		<>
			<h1>Primera app en React</h1>

			<Avatar url={"./media/images/khaleesi.png"} name={"Khaleesi"} />
			
            <UserCard name={"Raquel"} age={29} city={"Jerez"} />

			<CustomButton text={"Aceptar"} />

            <WelcomeMessage username={"Raquel"}/>

            <Product name={"Nike Dunk Low Next Nature"} price={59} info={"Siempre se puede contar con un clásico. Las Dunk Low combinan un estilo Color Block icónico con materiales premium y un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?"}/>
		
            <Alert type={"error"} message={"Ha ocurrido un error"}/>
            <Alert type={"info"} message={"Esto es un mensaje de informacion"}/>
            <Alert type={"exito"} message={"Todo OK"}/>
        
        </>
	);
};
