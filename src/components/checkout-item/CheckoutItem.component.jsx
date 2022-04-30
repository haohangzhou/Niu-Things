/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './CheckoutItem.scss';

import { CartContext } from '../../contexts/Cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItems, addItemToCart, removeItem } = useContext(CartContext);
	const reduceQuantity = () => removeItem(cartItem);
	const increaseQuantity = () => addItemToCart(cartItem);
	const clearAll = () => clearItems(cartItem);
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
