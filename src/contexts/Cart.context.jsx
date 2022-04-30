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

// helper function: remove item from cart
export const removeCartItem = (cartItems, productToRemove) => {
	// find the exiting item
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);
	//if quantity = 1, remove this item from the array
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== existingCartItem.id
		);
	}
	//else return new array with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCarOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItem: () => {},
	clearItems: () => {},
	cartQuantity: 0,
	cartTotal: 0,
	setCartTotal: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	// add new item to cart
	const addItemToCart = (product) =>
		setCartItems(addCartItem(cartItems, product));

	// remove item from cart
	const removeItem = (productToRemove) =>
		setCartItems(removeCartItem(cartItems, productToRemove));

	// remove the item and return a new array when user click on "X" on the checkout page
	const clearItems = (productToRemove) => {
		const newArray = cartItems.filter(
			(cartItem) => cartItem.id !== productToRemove.id
		);
		setCartItems(newArray);
	};

	// display the total quantity of cart items (used in cart icon)
	useEffect(() => {
		const newCartQuantity = cartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);

		setCartQuantity(newCartQuantity);
	}, [cartItems]);

	// Total balance in the checkout page
	useEffect(() => {
		const total = cartItems.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		setCartTotal(total);
	}, [cartItems]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		setCartItems,
		addItemToCart,
		removeItem,
		clearItems,
		cartQuantity,
		cartTotal,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
