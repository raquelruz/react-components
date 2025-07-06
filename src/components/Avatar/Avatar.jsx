import './Avatar.css';

export const Avatar = ({ name, url }) => {
    return (
        <div className='img-container'>
			<img className='img' src={url} alt={name} />
            <p className='avatar-name'>{name}</p>
        </div>
    )
}