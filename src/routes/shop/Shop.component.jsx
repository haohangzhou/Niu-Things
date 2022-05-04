import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Shop.scss';
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';
import { getCategoriesAndCollections } from '../../utils/firebase';
import { setCategoriesMap } from '../../store/category/category.action';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndCollections();
			dispatch(setCategoriesMap(categoryMap));
		};
		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
