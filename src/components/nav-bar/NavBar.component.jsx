import React, { Fragment, useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Niu.invert.svg';
import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';
import { signOutUser } from '../../utils/firebase.js';

import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
	StyledLogo,
} from './NavBar.style.jsx';

const NavBar = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<StyledLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>

					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default NavBar;
