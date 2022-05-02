import React, { Fragment, useContext } from 'react';
import './Shop.scss';

import { CategoriesContext } from '../contexts/Category.context';

import ProductCard from '../components/product-card/ProductCard.component';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	console.log(categoriesMap);
	return (
		<>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="product-container">
						{categoriesMap[title].map((product) => {
							return (
								<ProductCard
									key={product.id}
									product={product}
								/>
							);
						})}
					</div>
				</Fragment>
			))}
		</>
	);
};

export default Shop;
