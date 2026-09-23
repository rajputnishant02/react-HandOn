import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import products from '../data/products.json'
import Card from './Card'

const Products = () => {
    // const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const addToCart = (product) => {
        setItems((prev) => {
            const exist = prev.find((items) => (items.id === product.id))
            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return (
                [...prev, { ...product, quantity: 1 }]

            )
        })
    }

    const removeCart = (id) => {
        setItems((prev) => (
            prev.map((item) => item.id === id ? { ...prev, quantity: item.quantity - 1 } : item)
        ).filter((pre) => (pre.quantity > 0)))
    }

    const goToCart = () => {
        navigate('/cart', {
            state: {
                items: items
            }
        })

    }

    return (
        <>
            <div>Products</div>
            {products.map((product) => (
                <div key={product.id}>
                    <Card name={product.name} price={product.price} brand={product.brand} image={product.image} category={product.category} rating={product.rating}
                    />
                    <div >
                        <button onClick={() => addToCart(product)}>Add</button>
                        <button onClick={() => removeCart(product.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <button onClick={goToCart}>🛒</button>

        </>
    )
}

export default Products