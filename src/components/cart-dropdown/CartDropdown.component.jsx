import React, { useContext } from 'react';
import './CartDropdown.scss';

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
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<span>Your cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutPage}>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
