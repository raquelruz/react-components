import './App.css'
import { CustomButton } from './components/CustomButton/CustomButton';
import { UserCard } from './components/UserCard/UserCard';

export const App = () => {
    return (
        <>
        <h1>Primera app en React</h1>

        <UserCard name={"Raquel"} age={29} city={"Jerez"}/>

        <UserCard name={"Diego"} age={42} city={"Barcelona"}/>

        <UserCard name={"Arantxa"} age={28} city={"Medina"}/>

        <UserCard name={"David"} age={35} city={"Madrid"}/>

        <CustomButton text={"Aceptar"}/>
        </>
    )
};