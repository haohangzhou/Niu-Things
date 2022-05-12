import React, { Fragment } from 'react';
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
	StyledLogo,
} from './NavBar.style.jsx';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.js';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

const NavBar = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
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
