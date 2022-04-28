/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

// add to cart helper function
export const addCartItem = (cartItems, productToAdd) => {
	// check if productToAdd exist in the cartItems array
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	//if found, increase the this particular object's quantity, else return original cartItem array
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// if not found, add the product and initialise it with quantity of 1
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCarOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartQuantity: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (product) =>
		setCartItems(addCartItem(cartItems, product));

	useEffect(() => {
		const newCartQuantity = cartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setCartQuantity(newCartQuantity);
	}, [cartItems]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartQuantity,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
