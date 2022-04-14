import React, { useContext } from 'react';
import './Shop.scss';

import { ProductContext } from '../contexts/Product.context';

import ProductCard from '../components/product-card/ProductCard';

const Shop = () => {
	const { products } = useContext(ProductContext);

	return (
		<div className="product-container">
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</div>
	);
};

export default Shop;
