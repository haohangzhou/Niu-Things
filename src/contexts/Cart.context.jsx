/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import { creactAction } from '../utils/reducer.js';
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

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartQuantity: 0,
	cartTotal: 0,
};

const CART_ACTION_TYPES = {
	SET_CART_ITEM: 'SET_CART_ITEM',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const CartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEM:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`Invalid action type ${type} in CartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	// add new item to cart
	const addItemToCart = (product) => {
		const newCartItems = addCartItem(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};

	// remove item from cart
	const removeItem = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove);
		updateCartItemsReducer(newCartItems);
	};

	// remove the item and return a new array when user click on "X" on the checkout page
	const clearItems = (productToRemove) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.id !== productToRemove.id
		);
		updateCartItemsReducer(newCartItems);
	};

	const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

	const { isCartOpen, cartItems, cartQuantity, cartTotal } = state;

	const setIsCartOpen = (bool) => {
		dispatch(creactAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);

		const newTotal = newCartItems.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);

		dispatch(
			creactAction(CART_ACTION_TYPES.SET_CART_ITEM, {
				cartItems: newCartItems,
				cartQuantity: newCartCount,
				cartTotal: newTotal,
			})
		);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
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
