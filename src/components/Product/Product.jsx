import './Product.css';

export const Product = ({name, price, info}) => {
    return (
        <div className='product-container'>
            <h3>{name}</h3>
            <h4>{price} €</h4>
            <p>{info}</p>
        </div>
    )
}