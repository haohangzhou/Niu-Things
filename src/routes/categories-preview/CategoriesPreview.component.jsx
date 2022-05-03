import React, { useContext } from 'react';
import './CategoriesPreview.scss';

import { CategoriesContext } from '../../contexts/Category.context';

import CategoryPreview from '../../components/category-preview/CategoryPreview.componet';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<div className="categories-preview-container">
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview
						key={title}
						title={title}
						products={products}
					/>
				);
			})}
		</div>
	);
};

export default CategoriesPreview;
