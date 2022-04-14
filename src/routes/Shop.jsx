import React, { useContext } from 'react';
import { ProductContext } from '../contexts/Product';
import ProductCard from '../components/ProductCard';
import './Shop.scss';

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
