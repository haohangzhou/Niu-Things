/* eslint-disable react/prop-types */
import React from 'react';
import './ProductCard.scss';

import Button from '../button/Button';

const ProductCard = ({ product }) => {
	const { imageUrl, name, price } = product;
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-footer">
				<span className="product-name">{name}</span>
				<span className="product-price">{price}</span>
			</div>
			<Button buttonType="inverted">Add to Cart</Button>
		</div>
	);
};

export default ProductCard;
