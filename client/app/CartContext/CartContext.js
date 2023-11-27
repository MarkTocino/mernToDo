'use client'
import { createContext, useEffect, useState } from "react";
import { getCarData } from "../components/vehicleCars";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({children}) {
    // const cartFromLocalStorage = (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cartProducts"))) || [];
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(item)   
    },[])
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        })
    },[cartProducts])
    const [totalCost, setTotalCost] = useState(0)
    // cartProducts will be the products that we put into the cart and it starts as an empty array because we don't have anything from the beginning
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }
    function addOneToCart(id) { 
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts ([
                ...cartProducts,
                {
                    id: id,
                    quantity:1,
                }
            ])
        } else {
            setCartProducts(
            cartProducts.map(
                product => product.id === id
                ? {...product, quantity: product.quantity + 1}
                : product
                )
            )
        }
    }
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                    )
            )
        }
    }
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }
        useEffect(() => {
            async function fetchTotalCost() {
                let cost = 0;
                for(const cartItem of cartProducts)
                    try{
                        const cars = await getCarData(cartItem.id);
                        cost += parseInt(cars?.price) * cartItem.quantity;
                        setTotalCost(cost)
                    } catch(error) {
                        console.error("Error Failed at Getting Total Cost")
                    }
                }
            fetchTotalCost()
          }, [cartProducts]);
    const productsCount = cartProducts.reduce((sum, product) => sum + product.quantity, 0)
    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost: totalCost,
        productsCount,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider