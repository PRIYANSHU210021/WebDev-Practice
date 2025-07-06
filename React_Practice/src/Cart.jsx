import React, { useState } from 'react'

const dummyProduct = [
    {
        id: 1,
        name: "audee",
        price: "1.2lakh"
    },
    {
        id: 2,
        name: "vmw",
        price: "98k"
    },
    {
        id: 3,
        name: "egg roll royals",
        price: "1.5lakh"
    }
]

const Cart = () => {

    const [addCart, setAddCart] = useState([]);

    // const addToCart = (product) => {
    //     setAddCart([...addCart, product]);
    // };

    const addToCart = (product) => {
        const existing = addCart.find(item => item.id === product.id);

        if (existing) {
            // agar already cart me hai, quantity badhao
            const updatedCart = addCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setAddCart(updatedCart);
        } else {
            // agar nahi hai, new item add karo with quantity 1
            setAddCart([...addCart, { ...product, quantity: 1 }]);
        }
    };


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <h1>Add to Cart</h1>

            <div style={{ display: "flex", }}>
                {dummyProduct.map((item, idx) =>
                    <div key={item.id} style={{ textAlign: "center", border: "1px solid #aaa", margin: "10px", padding: "10px" }}>
                        <h4 border>{item.name}</h4>
                        <p>{item.price}</p>
                        {/* <button onClick={() => setAddCart(addCart + 1)}>Add to cart</button> */}
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                )}
            </div>
            {/* <h2>Total Items in Cart: {addCart}</h2> */}
            <h2>Cart Items ({addCart.length})</h2>
            <ul>
                {addCart.map((item, index) => (
                    <li key={item.id}>
                        {item.name} - {item.price} × {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart
