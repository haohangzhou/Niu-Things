/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './DirectoryItem.style.jsx';

const DirectoryItem = ({ category }) => {
	const navigation = useNavigate();
	const { imageUrl, title } = category;

	const goToShopPage = () => navigation(`/shop/${title}`);
	return (
		<DirectoryItemContainer onClick={goToShopPage}>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
