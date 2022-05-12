import React from 'react';
import {
	CartIconContainer,
	ShoppingIcon,
	ItemCount,
} from './CartIcon.style.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCartCount,
	selectIsCartOpen,
} from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

const CartIcon = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleCartDropdown}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
