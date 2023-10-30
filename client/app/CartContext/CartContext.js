'use client'
import { createContext, useState } from "react";
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
    const [cartProducts, setCartProducts] = useState([])
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
    function getTotalCost(){
        let totalCost = 0;
        cartProducts?.map((cartItem) => {
            const productData = getCarData(cartItem.id);
            totalCost += (parseInt(productData?.price) * cartItem.quantity);
            console.log(productData)
        }
        )
        return totalCost
    }

    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider