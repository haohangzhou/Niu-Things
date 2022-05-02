/* eslint-disable react/prop-types */
import { async } from '@firebase/util';
import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndCollections } from '../utils/firebase.js';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndCollections();
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	// add SHOP_DATA to firestore (run once only)
	/*	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA);
	}, []);
 */
	const value = { categoriesMap, setCategoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
