import './WelcomeMessage.css';

export const WelcomeMessage = ({ username }) => {
    return (
        <h3 className='welcomeMessage'>¡Bienvenida {username}!</h3>
    )
}