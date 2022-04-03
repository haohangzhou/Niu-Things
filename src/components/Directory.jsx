/* eslint-disable react/prop-types */
import React from 'react';
import CategoryItem from './CategoryItem';
import './Directory.scss';
const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => {
				return <CategoryItem key={category.id} category={category} />;
			})}
		</div>
	);
};

export default Directory;
