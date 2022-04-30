/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase.js';
// import SHOP_DATA from '../shop-data.js';

export const ProductContext = createContext({});

export const ProductsContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products, setProducts };

	// add SHOP_DATA to firestore (run once only)
	/*	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA);
	}, []);
 */
	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
