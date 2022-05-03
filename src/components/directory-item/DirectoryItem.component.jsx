/* eslint-disable react/prop-types */
import React from 'react';
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className="directory-item-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="directory-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
