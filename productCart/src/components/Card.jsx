import React from 'react';

const Card = ({ name, price, brand, image, category, rating }) => {
    return (
        <>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>Brand: {brand}</h3>
            <h3>Price: ₹{price}</h3>
            <h3>Category: {category}</h3>
            <h3>Rating: ⭐ {rating}</h3>

        </>
    );
};

export default Card;