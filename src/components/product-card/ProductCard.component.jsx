/* eslint-disable react/prop-types */
import React from 'react';
import './ProductCard.scss';
import Button from '../button/Button';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
	const { imageUrl, name, price } = product;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-footer">
				<span className="product-name">{name}</span>
				<span className="product-price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;
