import React from 'react';
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './CartDropdown.style.jsx';

import Button from '../button/Button';
import CartItem from '../cart-items/CartItem.component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCartItems,
	selectIsCartOpen,
} from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

const CartDropdown = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartItems = useSelector(selectCartItems);
	const goToCheckoutPage = () => {
		navigate('/checkout');
		//hide the cart when go to checkout page
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutPage}>Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
