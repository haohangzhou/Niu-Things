import React, { useContext } from 'react';
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './CartDropdown.style.jsx';

import Button from '../button/Button';
import CartItem from '../cart-items/CartItem.component';
import { CartContext } from '../../contexts/Cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutPage = () => {
		navigate('/checkout');
		//hide the cart when go to checkout page
		setIsCartOpen(!isCartOpen);
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
