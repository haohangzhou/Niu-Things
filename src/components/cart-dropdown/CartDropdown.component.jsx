import React from 'react';
import './CartDropdown.scss';

import Button from '../button/Button';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items"></div>
			<Button>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
