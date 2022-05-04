import React, { useEffect, useState } from 'react';
import './Category.scss';

import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{category.toUpperCase()}</h2>
			<div className="category-container">
				{products &&
					products.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
			</div>
		</>
	);
};

export default Category;
