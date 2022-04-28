import React, { useContext } from 'react';
import './CartDropdown.scss';

import Button from '../button/Button';
import CartItem from '../cart-items/CartItem.component';
import { CartContext } from '../../contexts/Cart.context';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
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
			<Button>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
