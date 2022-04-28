/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './ProductCard.scss';

import Button from '../button/Button';
import { CartContext } from '../../contexts/Cart.context';

const ProductCard = ({ product }) => {
	const { imageUrl, name, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};

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
