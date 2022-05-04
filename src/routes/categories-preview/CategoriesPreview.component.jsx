import React from 'react';
import { useSelector } from 'react-redux';
import './CategoriesPreview.scss';

import CategoryPreview from '../../components/category-preview/CategoryPreview.componet';
import { selectCategoriesMap } from '../../store/category/category.selector';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
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
