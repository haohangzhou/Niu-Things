/* eslint-disable react/prop-types */
import React from 'react';
import './CheckoutItem.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const { name, imageUrl, price, quantity } = cartItem;

	const reduceQuantity = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

	const increaseQuantity = () => dispatch(addItemToCart(cartItems, cartItem));

	const clearAll = () => dispatch(clearItemFromCart(cartItems, cartItem));
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={reduceQuantity}>
					-
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increaseQuantity}>
					+
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={clearAll}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
