import React from 'react';
import './Product.css';
import '@fortawesome/fontawesome-free'
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {

    const [{ }, dispatch] = useStateValue();


    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });

    };




    return (

        <div clssName='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <span className="fa fa-star checked"></span>
                        ))}
                </div>
            </div>
            <div className='product__imgBtn'>
                <img src={image} alt="camera" />

                <button className='product__btn' onClick={addToBasket}> Add to basket</button>

            </div>
        </div>
    )
}

export default Product
