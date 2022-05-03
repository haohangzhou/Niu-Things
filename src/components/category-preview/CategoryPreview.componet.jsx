/* eslint-disable react/prop-types */
import React from 'react';

import './CategoryPreview.scss';

import ProductCard from '../product-card/ProductCard.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<Link className="title" to={title}>
					{title.toUpperCase()}...
				</Link>
			</h2>
			{/* preview items first 4 items in the array */}
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
