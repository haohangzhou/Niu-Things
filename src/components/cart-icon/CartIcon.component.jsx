import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import {
	CartIconContainer,
	ShoppingIcon,
	ItemCount,
} from './CartIcon.style.jsx';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

	const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={toggleCartDropdown}>
			<ShoppingIcon />
			<ItemCount>{cartQuantity}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
