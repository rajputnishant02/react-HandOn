import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Cart = () => {
    const location = useLocation()
    const data = location.state?.items || []

    const total = data.reduce((sum, product) => {
        return sum + product.price * product.quantity;
    }, 0);

    console.log(data)

    return (
        <>
            <div>Cart</div>
            {
                data.map((product) => (
                    <div key={product.id}>
                        <h2>Product : {product.name} | <span>Quantity : {product.quantity}</span> | <span>Price : {product.price}</span> </h2>
                    </div>
                ))
            }
            {/* <hr /> */}
            <h2>Total Price : {total}</h2>
        </>
    )
}

export default Cart