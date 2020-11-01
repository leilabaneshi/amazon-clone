import React from 'react';
import './Product.css';
import '@fortawesome/fontawesome-free'

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
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

                <button className='product__btn'> Add to basket</button>

            </div>
        </div>
    )
}

export default Product
